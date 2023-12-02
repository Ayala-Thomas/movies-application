 export const keys = {
    movieKey: "e4542b90"
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
    return data;
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
 export const getApiMovies = async () => {
     const url = 'http://www.omdbapi.com/avengers'
     const options = {
         method: "GET",
         headers: {
             'Authorization': `Bearer ${keys.movieKey}`,
             'Content-Type': 'application/json'
         }
     }
     const response = await fetch(url, options)
     const data = await response.json()
     return data
 }


