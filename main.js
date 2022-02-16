let ham = document.querySelector(".ham")
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
    // array = []
    // console.log(array)
    if (styles.display.includes("none")) {
        links.style.display = "block"
    } else { links.style.display = "none" }
})