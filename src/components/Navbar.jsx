import axios from 'axios';
import React, { useState } from 'react';

const Navbar = () => {
    const id_key = '7c6e4841';
    const [inputValue, setInputValue] = useState(input_title);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let this_Fetch = `https://www.omdbapi.com/?t=${inputValue}&apikey=${id_key}`;
    
            axios.get(this_Fetch)
                .then((response) => {

                let this_Title = response.data.Title;
                document.getElementById('feature_title').innerHTML = this_Title;

                const releaseDate = response.data.Released;
                let formattedReleaseDate = releaseDate === "N/A" ? "N/A" : new Date(releaseDate).toISOString().substring(0, 10);
                document.getElementById('feature_release').innerHTML = "Released: " + formattedReleaseDate;

                document.getElementById('feature_overview').innerHTML = response.data.Plot;
                document.getElementById('feature_film').src = response.data.Poster;

                if(response.data.Type === "movie"){
                    document.getElementById('movieSrc').src = `https://vidsrc.xyz/embed/movie?imdb=${response.data.imdbID}`;
                } else {
                    document.getElementById('movieSrc').src = `https://vidsrc.xyz/embed/tv?imdb=${response.data.imdbID}`;
                }
            })
        }
    };

    return (
        <div id='searchbar' className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>PIRATE SHORE</h1>
            <div className='ml-auto'>
                <input 
                    id={'search'}
                    type='text' 
                    className='border-2-black bg-black bg-opacity-50 px-4 py-2 rounded-md cursor-pointer text-white focus:outline-none' 
                    placeholder='Search'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}/>
            </div>
        </div>
    );
}

export default Navbar;
const input_title = "";
