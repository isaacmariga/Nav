let ham = document.querySelector(".ham")
let links = document.querySelector(".links")


ham.addEventListener('click', event => {
    links.style.display = "block"
})
ham.addEventListener('dbclick', event => {
    links.style.display = "none"
})