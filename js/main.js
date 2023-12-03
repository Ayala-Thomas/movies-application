import {grabMovies, grabMovie, deleteMovie, postMovie, patchMovie, getAvengersMovies} from "./api/movies-api.js";
import{keys} from "./keys.js"


(async ()=>{
    // const getMovies = await grabMovies()
    // console.log(getMovies)
    // const getMovie = await grabMovie(2)
    // console.log(getMovie)
    const getAvengerMovie = await getAvengersMovies()
    console.log(getAvengerMovie)

})();