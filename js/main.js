import {grabMovies, grabMovie, deleteMovie, postMovie, patchMovie} from "./api/movies-api.js";

const draggablecontainer = document.querySelector(".dragglecontainer")
const search = document.querySelector("#search")




    let isDragging = false;
    let offsetX, offsetY;
draggablecontainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggablecontainer.getBoundingClientRect().left;
    offsetY = e.clientY - draggablecontainer.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    draggablecontainer.style.left = `${x}px`;
    draggablecontainer.style.top = `${y}px`;
});
document.addEventListener('mouseup', () => {
    isDragging = false;
});

(async ()=>{
    const getMovies = await grabMovies()
    console.log(getMovies)
    const getMovie = await grabMovie(2)
    console.log(getMovie)

    search.addEventListener("mousedown", ()=>{
        draggablecontainer.classList.toggle("display")
    })
})();