const menuMobileToggle = document.querySelector('#menu-mobile-toggle');
const menuMobile = document.querySelector('menu-mobile');

menuMobileToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});