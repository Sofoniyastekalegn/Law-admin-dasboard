let menuicn = document.querySelector("menuic");

let nav = document.querySelector("navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})