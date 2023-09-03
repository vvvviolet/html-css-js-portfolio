const menuBtn = document.querySelector(".menu-btn");
const dropdownMenu = document.querySelector('.dropdown-menu');
const menuBtnIcon = document.querySelector('.menu-btn i');
menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open')
    const insOpen = dropdownMenu.classList.contains('open')
    menuBtnIcon.classList = insOpen ? 'fas fa-xmark ' : 'fas fa-bars'
})

