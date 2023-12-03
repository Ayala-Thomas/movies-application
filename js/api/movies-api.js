 export const keys = {
    movieKey: "3766a3326b6bf94cf2944786431d0e25"
}



 export const grabMovies = async () => {
     const url = ` http://localhost:3000/movies`;
     const options = {
         method: "GET",
         headers: {
             "Content-Type": `application/json`
         },
     }
     const response =  await fetch(url, options)
     const data =  await response.json()
     return data
 }
 export const grabMovie = async (id) => {
    const url = `http://localhost:3000/movies/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data
};
export const deleteMovie = async (id) => {
    const url = `http://localhost:3000/movies/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }
    const response = await fetch(url, options);
    const data = await response.json()
    return data
}
export const postMovie = async ({title, rating}) => {
    const newMovie = {
        title,
        rating
    }
    const body = JSON.stringify(newMovie)
    const url = 'http://localhost:3000/movies'
    const options = {
        method: "POST",
        "Content-Type": 'application.json',
        body: body,
    }
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}
export const patchMovie = async (movie) => {
    const newMovie = {
        ...movie
    }
    const body = JSON.stringify(newMovie)
    const url = `http://localhost:3000/movies/${movie.id}`
    const options = {
        method: "PATCH",
        "Content-Type": 'application.json',
        body: body,
    }
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}
 export const getAvengersMovies = async () => {
     const url = `https://api.themoviedb.org/3/movie/299534/videos?language=en-US&api_key=3766a3326b6bf94cf2944786431d0e25`
     const options = {
         method: "GET",
         headers: {
             'Content-Type': 'application/json',

         }
     }

     const response = await fetch(url, options)
     const data = await response.json()
     return data
 }
 export const createMovieElement = async (movie) => {
     const movies = await movie
     const movieElement = document.createElement('div');
     movieElement.classList.add('col');
     movieElement.classList.add('col-md-4');
     movieElement.innerHTML = `
     <div class="card">
     <div class="card-body">
       <h5 class="card-title">${movies.title}</h5>
       <p class="card-text">${movies.overview}</p>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item margin-bottom"></li>
     </ul>
     </div>
     `;
     const movieContainer = document.querySelector("#marvel");
        movieContainer.appendChild(movieElement);
        return movieContainer
 }





