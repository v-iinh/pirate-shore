const display_key = ''; // CHANGE TO YOUR KEY

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${display_key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${display_key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${display_key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=horror&page=1`,
    requestThriller: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=thriller&page=1`,
    requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=action&page=1`,
    requestDrama: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=drama&page=1`,
    requestRomance: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=romance&page=1`,
    requestAdventure: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=adventure&page=1`,
    requestFantasy: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=fantasy&page=1`,
    requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=comedy&page=1`,
    requestMystery: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=mystery&page=1`,
    requestDocumentary: `https://api.themoviedb.org/3/search/movie?api_key=${display_key}&language=en-US&query=documentary&page=1`
}

export default requests