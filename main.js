const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppCar = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener('click', toggleDestopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu);
navbarShoppCar.addEventListener('click', toggleProductDetail);

function toggleDestopMenu(){  
    desktopMenu.classList.toggle('inactive')  
    if (!desktopMenu.classList.contains("inactive")) {
      productDetail.classList.add("inactive");
    }  
}


function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
}

function toggleProductDetail() {
  productDetail.classList.toggle("inactive");
  if (!productDetail.classList.contains("inactive") ) {
    mobileMenu.classList.add("inactive") || desktopMenu.classList.add("inactive");
  }  
}
