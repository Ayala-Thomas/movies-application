import {grabMovies, grabMovie, deleteMovie, postMovie, patchMovie, getAvengersMovies,createMovieElement,displayMovies } from "./api/movies-api.js";

import{keys} from "./keys.js"

(async ()=>{

    const getMovies = await grabMovies()
    console.log(getMovies)
  // const firstAvenger = await createMovieElement(grabMovie(1))
   const display = await displayMovies()









})();