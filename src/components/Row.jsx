// Row.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                const filteredMovies = response.data.results.filter(item => item.backdrop_path !== null);
                const shuffleArray = (array) => {
                  for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                  }
                  return array;
                };
                const shuffledMovies = shuffleArray(filteredMovies);
                setMovies(shuffledMovies);
                
            })
    }, [fetchURL]);

    const reset = () => [
        document.getElementById('searchbar').style.display = "flex",
        document.getElementById('feature_box').style.display = "block",
        document.getElementById('movie_box').style.display = "none",
        document.getElementById('movieSrc').src = ""
    ]

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    };    

    const updateFeature = (newSrc, newTitle, newDate, newOverview) => {
        reset()
        const featureFilm = document.getElementById("feature_film");
        const featureTitle = document.getElementById("feature_title");
        const featureRelease = document.getElementById("feature_release");
        const featureOverview = document.getElementById("feature_overview");
        featureFilm.src = newSrc;
        featureTitle.innerHTML = newTitle;
        featureRelease.innerHTML = "Released: " + newDate;
        featureOverview.innerHTML = truncateString(newOverview, 150);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider" + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }


    return (
        <div>
            <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={40} className='text-white bg-black h-full absolute opacity-75 hover:opacity-90 cursor-pointer z-10 left-0 hidden group-hover:block' />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <div className={`w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ${title === item?.title ? 'selected' : ''}`}>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                            <div onClick={() => updateFeature(`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`, `${item?.title}`, `${item?.release_date}`, `${item?.overview}`)} className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white flex justify-center items-center'>
                                <p className='white-space-normal text-xs md:text-sm font-bold'>{item?.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='text-white bg-black h-full absolute opacity-75 hover:opacity-90 cursor-pointer z-10 right-0 hidden group-hover:block' />
            </div>
            </>
        </div>
    )
}

export default Row;
