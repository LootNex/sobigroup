window.onload = () => {
    
    let button = document.getElementById(`header_burger`)
    let button_2 = document.getElementById(`header__menu`)
        
    button.addEventListener('click', () => {
        button_2.classList.toggle("active")
    });
}