import React, { useEffect, useState } from "react";
import requests from '../Requests'
import axios from "axios";

const id_key = '7c6e4841';
const Main = () => {

    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    },[]);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    };    

    const playMovie = (title) => {
        let this_src = document.getElementById('movieSrc');

        document.getElementById('searchbar').style.display = "none";
        document.getElementById('feature_box').style.display = "none";
        document.getElementById('movie_box').style.display = "block";

        let this_Fetch = `https://www.omdbapi.com/?t=${title}&apikey=${id_key}`;
        let this_ID = ''

        axios.get(this_Fetch)
            .then((response) => {
            this_ID = response.data.imdbID;
            this_src.src = `https://vidsrc.xyz/embed/movie?imdb=${this_ID}`;

            if(response.data.Type === "movie"){
                this_src.src = `https://vidsrc.xyz/embed/movie?imdb=${this_ID}`;
            } else {
                this_src.src = `https://vidsrc.xyz/embed/tv?imdb=${this_ID}`;
            }
        })
    };

    return (
        <div>
            <div id={'feature_box'} className="w-full h-[550px] text-white">
                <div className="w-full h-full">
                    <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                    <div className="absolute w-full h-[550px] bg-gradient-to-t from-black"></div>
                    <img id={'feature_film'} className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}.jpg`} alt={movie?.title}/>
                    <div className="absolute w-full top-[20%] p-4 md:p-8">
                        <h1 id={'feature_title'} className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                        <div className="my-4">
                        <button onClick={() => playMovie(document.getElementById('feature_title').innerHTML)} className="border hover:text-black hover:bg-gray-300 text-white border-gray-300 py-2 px-5">Play</button>
                        </div>
                        <p id={'feature_release'} className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
                        <p id={'feature_overview'} className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
                    </div>
                </div>
            </div>
            <div id="movie_box" class="w-full h-[100vh] text-white hidden">
                <div class="w-full h-[100vh]">
                    <div class="video-container">
                        <iframe id="movieSrc" class="w-full h-[100vh] object-cover pointer-events-auto" src="" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main