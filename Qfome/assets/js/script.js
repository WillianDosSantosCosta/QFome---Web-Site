const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
});
