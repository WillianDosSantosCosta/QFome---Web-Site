/* Menu*/
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
});

/*Carrinho de compras*/
const cartButton = document.getElementById('cart-shop');
const cartContainer = document.getElementById('cart-container');

cartButton.addEventListener('click', function() {
  cartContainer.style.opacity = '1000';
  cartContainer.style.display = 'flex'
});

const closeCartButton = document.getElementById('close-cart-button');
const Cartczontainer = document.getElementById('cart-container');

closeCartButton.addEventListener('click', function() {
  cartContainer.style.display = 'none';
});



/*cart recomendados*/
var imagem = document.getElementsByClassName("img-cart");
var descricao = document.getElementsByClassName("description-info-recommend");
var fechar = document.getElementById("fechar-description-recommend");

imagem.addEventListener("click", function() {
  descricao.style.display = "block";
});

fechar.addEventListener("click", function() {
  descricao.style.display = "none";
});










