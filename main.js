const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail  = document.querySelector('.shopping-cart-detail ');

const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector(".product-detail");
const productDetailclose = document.querySelector('.product-detail-close');



navbarEmail.addEventListener('click', toggleDestopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu);
navbarShoppCar.addEventListener('click', toggleshoppingCartDetail);
productDetailclose.addEventListener("click", closeProductDetailAside);



function toggleDestopMenu(){  
    desktopMenu.classList.toggle('inactive')  
    if (!desktopMenu.classList.contains('inactive')) {
      shoppingCartDetail.classList.add("inactive") ||
        productDetail.classList.add("inactive");
    }  
}


function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  if (!mobileMenu.classList.contains('inactive')) {
    shoppingCartDetail.classList.add("inactive") ||
      productDetail.classList.add("inactive");
  }
}

function toggleshoppingCartDetail () {
  shoppingCartDetail.classList.toggle('inactive');
  if (!shoppingCartDetail.classList.contains('inactive') ) {
    mobileMenu.classList.add("inactive") ||
      desktopMenu.classList.add("inactive") ||
      productDetail.classList.add("inactive");
  }  
}

function openProductDetailAside(){
  productDetail.classList.remove('inactive')
  if (!productDetail.classList.contains("inactive")) {
    shoppingCartDetail.classList.add("inactive") ||
      mobileMenu.classList.add("inactive") ||
      desktopMenu.classList.add("inactive");
  }  
}
function closeProductDetailAside(){
  productDetail.classList.add("inactive");
}

const productList = [];

/*puedes crear tantos productos como quieras*/

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Bag',
  price: 365,
  image:
    'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Camera',
  price: 85,
  image:
    'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Phone',
  price: 135,
  image:
    'https://images.pexels.com/photos/12416205/pexels-photo-12416205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Ring',
  price: 365,
  image:
    'https://images.pexels.com/photos/11560352/pexels-photo-11560352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'Old cars',
  price: 520,
  image:
    'https://images.pexels.com/photos/4502385/pexels-photo-4502385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts (arr){
  /*recorremos el array con of tambien lo puedes hacer con in pero te mostaria los indice  */
  for (product of arr) {
    const productCard = document.createElement('div'); //permite crear cada elemento dinamicamente del HTML pero utilizando JS
    productCard.classList.add('product-card');

    const productImg = document.createElement('img'); //product = {name,price, image} luego utilizas product.image
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productDetaInfo= document.createElement('div');
    productDetaInfo.classList.add('product-detail-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    /*insertar en HTML */
    productInfoFigure.appendChild(productImgCart);

    productDetaInfo.appendChild(productInfoDiv);
     productDetaInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productDetaInfo);
  
    cardContainer.appendChild(productCard);
  }
}

renderProducts(productList)