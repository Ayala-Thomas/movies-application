import {grabMovies, grabMovie, deleteMovie, postMovie, patchMovie, getApiMovies} from "./api/movies-api.js";
import{keys} from "./keys.js"


(async ()=>{
    // const getMovies = await grabMovies()
    // console.log(getMovies)
    // const getMovie = await grabMovie(2)
    // console.log(getMovie)
    const getApiMovie = await getApiMovies()
    console.log(getApiMovie)

})();