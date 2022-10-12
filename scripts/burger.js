const burgerButtonElement = document.querySelector('.burger-button');
const mobileMenuElement = document.querySelector('.mobile-menu');
const logoElement = document.querySelector('.logo');
const logoMobileElement = document.querySelector('.logo--mobile');

burgerButtonElement.addEventListener('click', function () {
  logoElement.classList.toggle('logo--hidden');
  mobileMenuElement.classList.toggle('mobile-menu--open');
  mobileMenuElement.classList.toggle('mobile-menu--shadow');
  burgerButtonElement.classList.toggle('burger-button--open');
  logoMobileElement.classList.toggle('logo--transition');
});
