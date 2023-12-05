import {updateMovies, deleteMovie, grabMovie, postMovie} from "./api/movies-api.js";

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

    await updateMovies();
    const searchInput = document.querySelector("#draggleinput");
    searchInput.addEventListener("input", (e)=>{
    updateMovies();
    });
    const addBtn = document.querySelector("#add-btn2");
    const rateInput = document.querySelector("#add-rating");
    const overviewInput = document.querySelector("#add-overview");
    const titleInput = document.querySelector("#add-movie");
    addBtn.addEventListener("click", async (e)=>{
        // console.log(addInput.value)
        await postMovie({
            title: titleInput.value,
            overview: overviewInput.value,
            vote_average: parseFloat(rateInput.value),
            img: "./img/default.webp"


        });
        alert("Movie Added")
        await updateMovies()
    })





    search.addEventListener("mousedown", ()=>{
        draggablecontainer.classList.toggle("display")
    })
})();