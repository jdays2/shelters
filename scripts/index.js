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

const sliderLeft = document.querySelector(".button-arrow--left");
const sliderRight = document.querySelector(".button-arrow--right");
const sliderLine = document.querySelector(".slider__line");
let start = 0;

sliderLeft.addEventListener('click', function(){
  start = start - 360;
  if(start < 0)
  start=0;
  sliderLine.style.left = -start + "px";
});

sliderRight.addEventListener('click', function(){
  start = start + 360;
  if(start > 1800)
  start=0;
  sliderLine.style.left = -start + "px";
});

const buttonKetrine = document.querySelector(".button-slider--ketrine");
const openKetrine = document.querySelector(".profile-window--katrine")
const buttonJennifer = document.querySelector(".button-slider--jennifer");
const openJennifer = document.querySelector(".profile-window--jennifer")
const buttonWoody = document.querySelector(".button-slider--woody");
const openWoody = document.querySelector(".profile-window--woody")
const buttonSophia = document.querySelector(".button-slider--sophia");
const openSophia = document.querySelector(".profile-window--sophia")
const buttonTimmy = document.querySelector(".button-slider--timmy");
const openTimmy = document.querySelector(".profile-window--timmy")
const buttonCharly = document.querySelector(".button-slider--charly");
const openCharly = document.querySelector(".profile-window--charly")
const buttonScarlet = document.querySelector(".button-slider--scarlet");
const openScarlet = document.querySelector(".profile-window--scarlet")
const buttonFreddie = document.querySelector(".button-slider--freddie");
const openFreddie = document.querySelector(".profile-window--freddie");

const btnCloseKatrine = document.querySelector('#katrine');
const btnCloseJennifer = document.querySelector('#jennifer');
const btnCloseWoody = document.querySelector('#woody');
const btnCloseSophia = document.querySelector('#sophia');
const btnCloseTimmy = document.querySelector('#timmy');
const btnCloseCharly = document.querySelector('#charly');
const btnCloseScarlet = document.querySelector('#scarlet');
const btnCloseFreddie = document.querySelector('#freddie');

buttonKetrine.addEventListener('click', function(){
  openKetrine.classList.remove('profile-window--close');
  openKetrine.classList.add('profile-window--open');
});
btnCloseKatrine.addEventListener('click', function(){
  openKetrine.classList.remove('profile-window--open');
  openKetrine.classList.add('profile-window--close');
});

buttonJennifer.addEventListener('click', function(){
  openJennifer.classList.remove('profile-window--close');
  openJennifer.classList.add('profile-window--open')
})
btnCloseJennifer.addEventListener('click', function(){
  openJennifer.classList.remove('profile-window--open');
  openJennifer.classList.add('profile-window--close');
});

buttonWoody.addEventListener('click', function(){
  openWoody.classList.remove('profile-window--close');
  openWoody.classList.add('profile-window--open');
})
btnCloseWoody.addEventListener('click', function(){
  openWoody.classList.remove('profile-window--open');
  openWoody.classList.add('profile-window--close');
});

buttonSophia.addEventListener('click', function(){
  openSophia.classList.remove('profile-window--close');
  openSophia.classList.add('profile-window--open');
})
btnCloseSophia.addEventListener('click', function(){
  openSophia.classList.remove('profile-window--open');
  openSophia.classList.add('profile-window--close');
});

buttonTimmy.addEventListener('click', function(){
  openTimmy.classList.remove('profile-window--close');
  openTimmy.classList.add('profile-window--open');
})
btnCloseTimmy.addEventListener('click', function(){
  openTimmy.classList.remove('profile-window--open');
  openTimmy.classList.add('profile-window--close');
});

buttonCharly.addEventListener('click', function(){
  openCharly.classList.remove('profile-window--close');
  openCharly.classList.add('profile-window--open');
})
btnCloseCharly.addEventListener('click', function(){
  openCharly.classList.remove('profile-window--open');
  openCharly.classList.add('profile-window--close');
});

buttonScarlet.addEventListener('click', function(){
  openScarlet.classList.remove('profile-window--close');
  openScarlet.classList.add('profile-window--open');
})
btnCloseScarlet.addEventListener('click', function(){
  openScarlet.classList.remove('profile-window--open');
  openScarlet.classList.add('profile-window--close');
});

buttonFreddie.addEventListener('click', function(){
  openFreddie.classList.remove('profile-window--close');
  openFreddie.classList.add('profile-window--open');
})
btnCloseFreddie.addEventListener('click', function(){
  openFreddie.classList.remove('profile-window--open');
  openFreddie.classList.add('profile-window--close');
});





 
