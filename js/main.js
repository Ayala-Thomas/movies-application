import {grabMovies, grabMovie, deleteMovie, postMovie, patchMovie} from "./api/movies-api.js";


(async ()=>{
    const getMovies = await grabMovies()
    console.log(getMovies)
    const getMovie = await grabMovie(2)
    console.log(getMovie)

})();