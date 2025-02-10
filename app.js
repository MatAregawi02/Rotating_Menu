let container = document.querySelector(".container");
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");

openBtn.addEventListener("click", ()=> {
    container.classList.add("show-nav");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    closeBtn.style.left = `${60}%`;
    closeBtn.style.bottom = `${10}%`;
});
closeBtn.addEventListener("click", ()=> {
    container.classList.remove("show-nav");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    openBtn.style.left = `${60}%`;
    openBtn.style.bottom = `${10}%`;
});