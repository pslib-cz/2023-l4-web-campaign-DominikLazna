const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", toggleNav);

function toggleNav() {
    navLinks.classList.toggle("active")
}