const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const body = document.body;

// Clone menubar for a custom mobile css styles
const menubar = document.querySelector('#menubar').cloneNode(1);

burger.addEventListener('click', burgerHandler);

// Click on burgerurger menu
function burgerHandler(e) {
  e.preventDefault();
  popup.classList.toggle("burger__menu--open");
  burger.classList.toggle("burger__block--active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Render of popup's elements
function renderPopup() {
  popup.appendChild(menubar);
}

// Code for a close popup on clicking on link
const links = Array.from(menubar.children);


// For every menubar's element on click calling function
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Closing popup when clicking on a link
function closeOnClick() {
  popup.classList.remove("burger__menu--open");
  burger.classList.remove("burger__block--active");
  body.classList.remove("noscroll");
}
