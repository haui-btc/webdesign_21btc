const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

/*funktion wird bei klick aktiv */
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});