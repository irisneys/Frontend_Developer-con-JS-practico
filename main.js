const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navbarEmail.addEventListener('click', toggleDestopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleDestopMenu(){  
    desktopMenu.classList.toggle('inactive')    
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}