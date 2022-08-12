// responsive navbar
const brand = document.querySelector(".mobile-nav-brand");
const desktop_nav = document.querySelector(".desktop-nav");

brand.addEventListener("click", () => {
    desktop_nav.classList.toggle("active");
});

console.log("test");