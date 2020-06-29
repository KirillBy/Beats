const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".fullscreen-menu");
const close = document.querySelector(".fullscreen-menu__close");

burger.addEventListener('click', e => {
    e.preventDefault();
    console.log("clicke burger");
  menu.classList.add('fullscreen-menu_active');
});

menu.addEventListener('click', function (e) {
  if (!e.target.classList.contains('menu__item') || e.target.classList.contains('close')) {
    menu.classList.remove('.active');
  }
  
  if (e.target.classList.contains('menu__item')) {
    menu.classList.remove('.active');
  }
  
});