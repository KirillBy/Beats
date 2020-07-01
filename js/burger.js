const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".fullscreen-menu");
const close = document.querySelector(".fullscreen-menu__close");

function toggleMenu(element, classToggle){
    element.classList.toggle(classToggle);
}
burger.addEventListener('click', e => {
    e.preventDefault();
    toggleMenu(menu,'fullscreen-menu_active');
});

menu.addEventListener('click', function (e) {
    e.preventDefault();
  if (!e.target.classList.contains('menu__item') || e.target.classList.contains('close')) {
    toggleMenu(menu,'fullscreen-menu_active');
  }
  
  if (e.target.classList.contains('menu__item')) {
    toggleMenu(menu,'fullscreen-menu_active');
  }
  
});