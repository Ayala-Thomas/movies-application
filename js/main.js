import {grabMovies, grabMovie, deleteMovie, postMovie, patchMovie, getAvengersMovies,createMovieElement} from "./api/movies-api.js";

import{keys} from "./keys.js"

(async ()=>{

    const getMovies = await grabMovies()
    console.log(getMovies)
  const lets = await createMovieElement(grabMovie(1))
    console.log(lets)









})();