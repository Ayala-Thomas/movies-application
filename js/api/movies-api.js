
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
export const postMovie = async (movie) => {
    const newMovie = {
        ...movie,
    }
    // console.log(newMovie.title)
    const body = JSON.stringify(newMovie)
    const url = 'http://localhost:3000/movies'
    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: body,
    }
    const response = await fetch(url, options)
    const data = await response.json();
    console.log("Data after post => ", data);
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
     const url = `https://api.themoviedb.org/3/movie/299534/quary=spiderman&language=en-US&api_key=3766a3326b6bf94cf2944786431d0e25`
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
 export const createMovieElement = ({title, overview, video, img, id}) => {
     const movieElement = document.createElement('div');
     movieElement.classList.add('col');
     movieElement.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="titleimg">
                <img src="${img}" class="card-img-top" alt="...">
            </div>
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <hr>
            <div class="scrollme">
            <p class="card-text">${overview}</p>
            </div>
            <div class="addAndDeletebtn">
            <a href="${video}" class="btn btn-primary">Play Trailer</a>
            <button id="delete-btn">Delete</button>
            </div>
          </div>
        </div>
     `;

     const deleteButton = movieElement.querySelector("#delete-btn");
     deleteButton.addEventListener("click", async (e) => {
         // showLoading();
         await deleteMovie(id);
         await updateMovies();
        //  hideLoading();
     });


     const appendElement = document.querySelector("#marvel")
     appendElement.appendChild(movieElement)
 };

 export const updateMovies = async () => {
     const movies = await grabMovies();
     const coffeesContainer = document.querySelector("#marvel")
     coffeesContainer.innerHTML = "";

     const searchInput = document.querySelector("#draggleinput");
     const searchValue = searchInput.value;
     // const categoryInput = document.querySelector("#category");
     // const categoryValue = categoryInput.value;

     let filterMovies = movies;
     // filterMovies = filterMovies.filter((movies)=>{
     //     if (!categoryValue) {
     //         return true;
     //     }
     //     if (!movies.vote_count) {
     //         return false;
     //     }
     //     return movies.vote_count.includes(categoryValue.toLowerCase());
     // })
     filterMovies = filterMovies.filter((movies)=>{
         if (!searchValue) {
             return true;
         }
         if (typeof movies.title!== "string") {
             return false;
         }
         return movies.title.toLowerCase().includes(searchValue.toLowerCase());
     });
     for (let movie of filterMovies) {
         createMovieElement(movie);
     }



 }
 //changed














