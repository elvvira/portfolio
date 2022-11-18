const menuElement = document.getElementById('menu');
const iconElement = document.getElementById('menu-icon');
const closeElement = document.getElementById('menu-close');
const submenuElement = document.getElementById('submenu');
const arrowElement = document.getElementById('arrow');
const arrowReverseElement = document.getElementById('arrow-reverse');

iconElement.addEventListener('click', (event)=>{
    menuElement.classList.add('menu--show');
});

closeElement.addEventListener('click', (event)=>{
    menuElement.classList.remove('menu--show');
    submenuElement.classList.remove('submenu--show');
});

arrowElement.addEventListener('click', (event)=>{
    submenuElement.classList.add('submenu--show');
} );

arrowReverseElement.addEventListener('click', (event)=>{
    submenuElement.classList.remove('submenu--show');
});