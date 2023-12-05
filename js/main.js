import {updateMovies, deleteMovie, grabMovie, postMovie, patchMovie} from "./api/movies-api.js";

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

    const addForm = document.querySelector("#add-form");
    addForm.addEventListener("submit", async (e)=>{
        e.preventDefault();
        const formData = new FormData(addForm);
        await postMovie({
            title: formData.get("title"),
            overview: formData.get("overview"),
            vote_average: parseFloat(formData.get("vote_average")),
            img: "./img/default.webp"
        });
        alert("Movie Added")
        await updateMovies()
    })
const removeHammer = document.querySelector("#remove-hammer")





    search.addEventListener("mousedown", ()=>{
        draggablecontainer.classList.toggle("display")
    })
})();