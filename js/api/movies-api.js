
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
    const body = JSON.stringify(newMovie)
    const url = `http://localhost:3000/movies${movie.id}`
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
    const url = `http://localhost:3000/movies/${movie.id}/`
    const options = {
        method: "PATCH",
        body: body,
    }
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}
console.log(patchMovie())
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
 export const createMovieElement = ({title, overview, video, img, id, vote_average}) => {
     const movieElement = document.createElement('div');
     movieElement.classList.add('col');
     movieElement.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${overview}</p>
            <meter value="${vote_average}" min="0" max="10" class="w-100"></meter>
            <p>
    <a class="btn" data-bs-toggle="collapse" href="#collapseMovie${id}" role="button" aria-expanded="false" aria-controls="collapseExample">
       Edit Movie
    </a>

</p>
<div class="collapse" id="collapseMovie${id}">
    <div class="card card-body">
       
            <label for="movie">
            <input type="text" id="edit-title" placeholder="Edit Title">
            <input type="text" id="edit-rating" placeholder="Edit Rating">
            <input type="text" id="edit-overview" placeholder="Edit Overview">
            <input type="submit" id="edit-btn">
            </label>
    
    </div>
</div>

            <a href="${video}" class="btn btn-primary">Go somewhere</a>
            <button id="delete-btn">Delete</button>
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

     const editTitle = movieElement.querySelector("#edit-title");
     const editRating = movieElement.querySelector("#edit-rating");
     const editOverview = movieElement.querySelector("#edit-overview");
     const editBtn = movieElement.querySelector("#edit-btn");

     editBtn.addEventListener("click", async (e) => {
         console.log(editTitle.value);
         await patchMovie({
             // can only update title, rating, and overview
                id: id,
                title: editTitle.value,
                overview: editOverview.value,
                vote_average: parseFloat(editRating.value),





         });
         await updateMovies();
     });
     console.log(patchMovie())
     const appendElement = document.querySelector("#marvel")
     appendElement.appendChild(movieElement)
 };

 export const updateMovies = async () => {
     const movies = await grabMovies();
     const moviesContainer = document.querySelector("#marvel")
     moviesContainer.innerHTML = "";

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














