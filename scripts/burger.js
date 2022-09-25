const burger = document.querySelector('.burg');
const burgerActive = document.querySelector('.burger');
const logoHiden = document.querySelector('.logo');



burger.onclick = function() {
  burgerActive.classList.toggle('active');
  burger.classList.toggle('open');
  logoHiden.classList.toggle('hiden');
}
