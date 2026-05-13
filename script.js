const toggleBtn = document.querySelector(".cs-toggle");
const nav = document.querySelector(".cs-nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", () => {

    if(window.innerWidth <= 1024){
        dropdown.classList.toggle("active");
    }

});