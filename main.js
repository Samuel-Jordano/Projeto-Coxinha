const navmenu = document.querySelector('.nav-menu');
const menu = document.querySelector('.menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('ativo');
    navmenu.classList.toggle('ativo');
})

window.addEventListener('scroll', function(){
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

