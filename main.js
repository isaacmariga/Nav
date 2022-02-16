let ham = document.querySelector(".ham")
let ham2 = document.querySelector(".ham2")
let links = document.querySelector(".links")
let styles = getComputedStyle(links)

// if (links.style.display = "none") {}
// ham.addEventListener('toggle', event => {
//         links.style.display = "block"
//     })
// ham.addEventListener('dbclick', event => {
//     links.style.display = "none"
// })



ham.addEventListener('click', event => {
    links.style.display = "block"
    console.log(styles.display)

})