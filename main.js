const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener('click', toggleDestopMenu)

function toggleDestopMenu(){

    desktopMenu.classList.toggle('inactive')
    
}