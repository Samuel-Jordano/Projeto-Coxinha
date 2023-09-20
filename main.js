const togglebtn = document.querySelector('.toggle-btn')
const togglebtnicon = document.querySelector('.toggle-btn i')
const DropMenu = document.querySelector('.drop-menu')


togglebtn.addEventListener('click', function(){
    DropMenu.classList.toggle('open');
    const isOpen = DropMenu.classList.contains('open')
    
    togglebtnicon.classList = isOpen
    ? 'bx bx-x bx-tada'
    : 'bx bx-menu'

})


