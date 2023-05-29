document.addEventListener("DOMContentLoaded", () => {
    let button_1 = document.getElementById("nav_element_1")
    let button_2 = document.getElementById("nav_element_2")

    const left = document.querySelector('.projects__items')
    const right = document.querySelector('.projects__items')

    button_1.addEventListener('click', () => {
        left.scrollBy(-250, 0)
    })

    button_2.addEventListener('click', () => {
        right.scrollBy(250, 0);
    })
})