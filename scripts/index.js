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

sliderLeft.addEventListener('click', function () {
  start = start - 360;
  if (start < 0)
    start = 0;
  sliderLine.style.left = -start + "px";
});

sliderRight.addEventListener('click', function () {
  start = start + 360;
  if (start > 1800)
    start = 0;
  sliderLine.style.left = -start + "px";
});

const pets = [
  {
    tag: "katrine",
    name: "Katrine",
    animal: "Cat",
    kind: "British Shorthair",
    img: "images/our-friends/pets-katrine.png",
    age: "2 months",
    Inoculations: "none",
    diseases: "none",
    Parasites: "none",
    story: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations."
  },
  {
    tag: "jennifer",
    name: "Jennifer",
    animal: "Dog",
    kind: "Labrador",
    img: "images/our-friends/pets-jennifer.png",
    age: "5 months",
    Inoculations: "none",
    diseases: "none",
    parasites: "none",
    story: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
  },
  {
    tag: "woody",
    name: "Woody",
    animal: "Dog",
    kind: "Golden Retriever",
    img: "images/our-friends/pets-woody.png",
    age: "7 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
    story: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him."
  },
  {
    tag: "sophia",
    name: "Sophia",
    animal: "Dog",
    kind: "Shih tzu",
    img: "images/our-friends/pets-sophia.png",
    age: "9 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
    story: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice."
  },
  {
    tag: "timmy",
    name: "Timmy",
    animal: "Cat",
    kind: "British Shorthair",
    img: "images/our-friends/pets-timmy.png",
    age: "10 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
    story: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with."
  },
  {
    tag: "charly",
    name: "Charly",
    animal: "Dog",
    kind: "Jack Russell Terrier",
    img: "images/our-friends/pets-charly.png",
    age: "2 years",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
    story: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy."
  },
  {
    tag: "scarlet",
    name: "Scarlet",
    animal: "Dog",
    kind: "Jack Russell Terrier",
    img: "images/our-friends/pets-scarlet.png",
    age: "7 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
    story: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human."
  },
  {
    tag: "freddie",
    name: "Freddie",
    animal: "Cat",
    kind: "British Shorthair",
    img: "images/our-friends/pets-freddie.png",
    age: "200 years :)",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
    story: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home."
  },
];

window.addEventListener("load", function () {
  const slider = document.querySelector(".slider__line");
  const sliderItems = pets.map(function (pet) {
    return `<div class="slider__card">
      <img src="${pet.img}" class="slider-card__img">
      <span class="slider-card__card-name">${pet.name}</span>
      <button href="#" class="button button-slider button-slider--${pet.tag}">
        Learn more
      </button>
    </div>
    
    <div class="profile-window__wrapper profile-window--${pet.tag}">
    <div class="profile-window">
     <div class="profile-window__content">
     <img src="${pet.img}" class="profile-window__img">
       <div class="profile-window__description">
       <p class="profile-window__heading">
       ${pet.name}
        </p>
        <p class="profile-window__subheading">
        ${pet.animal} - ${pet.kind}
        </p>
        <p class="profile-window__story">
        ${pet.story}
        </p>
         <ul class="profile-window__data">
        <li class="data__info">
          <b>Age:</b> ${pet.age}
         </li>
         <li class="data__info">
         <b>Inoculations:</b> ${pet.inoculations}
         </li>
        <li class="data__info">
         <b>Diseases:</b> ${pet.diseases}
          </li>
           <li class="data__info">
           <b>Parasites:</b> ${pet.parasites}
           </li>
           </ul>
           </div>
           <button href="#" id="${pet.tag}" class="button--close-window">
            <img src="./images/our-friends/x.svg" class="btn-img">
          </button>
         </div>
        </div>
      </div>`
   });

  slider.innerHTML = sliderItems.join('')

// 
//   const buttonKetrine = document.querySelector(".button-slider--katrine");
//   const openKetrine = document.querySelector(".profile-window--katrine");
//   const buttonJennifer = document.querySelector(".button-slider--jennifer");
//   const openJennifer = document.querySelector(".profile-window--jennifer");
//   const buttonWoody = document.querySelector(".button-slider--woody");
//   const openWoody = document.querySelector(".profile-window--woody");
//   const buttonSophia = document.querySelector(".button-slider--sophia");
//   const openSophia = document.querySelector(".profile-window--sophia");
//   const buttonTimmy = document.querySelector(".button-slider--timmy");
//   const openTimmy = document.querySelector(".profile-window--timmy");
//   const buttonCharly = document.querySelector(".button-slider--charly");
//   const openCharly = document.querySelector(".profile-window--charly");
//   const buttonScarlet = document.querySelector(".button-slider--scarlet");
//   const openScarlet = document.querySelector(".profile-window--scarlet");
//   const buttonFreddie = document.querySelector(".button-slider--freddie");
//   const openFreddie = document.querySelector(".profile-window--freddie");
// 
//   const btnCloseKatrine = document.querySelector('#katrine');
//   const btnCloseJennifer = document.querySelector('#jennifer');
//   const btnCloseWoody = document.querySelector('#woody');
//   const btnCloseSophia = document.querySelector('#sophia');
//   const btnCloseTimmy = document.querySelector('#timmy');
//   const btnCloseCharly = document.querySelector('#charly');
//   const btnCloseScarlet = document.querySelector('#scarlet');
//   const btnCloseFreddie = document.querySelector('#freddie');
// 
// buttonKetrine.addEventListener('click', function(){
//   openKetrine.classList.toggle('profile-window--open');
// });
// btnCloseKatrine.addEventListener('click', function(){
//   openKetrine.classList.toggle('profile-window--open');
// });
// 
// buttonJennifer.addEventListener('click', function(){
//   openJennifer.classList.toggle('profile-window--open');
// });
// btnCloseJennifer.addEventListener('click', function(){
//   openJennifer.classList.toggle('profile-window--open');
// });
// 
// buttonWoody.addEventListener('click', function(){
//   openWoody.classList.toggle('profile-window--open');
// });
// btnCloseWoody.addEventListener('click', function(){
//   openWoody.classList.toggle('profile-window--open');
// });
// 
// buttonSophia.addEventListener('click', function(){
//   openSophia.classList.toggle('profile-window--open');
// });
// btnCloseSophia.addEventListener('click', function(){
//   openSophia.classList.toggle('profile-window--open');
// })
// 
// buttonTimmy.addEventListener('click', function(){
//   openTimmy.classList.toggle('profile-window--open');
// });
// btnCloseTimmy.addEventListener('click', function(){
//   openTimmy.classList.toggle('profile-window--open');
// })
// 
// buttonCharly.addEventListener('click', function(){
//   openCharly.classList.toggle('profile-window--open');
// });
// btnCloseCharly.addEventListener('click', function(){
//   openCharly.classList.toggle('profile-window--open');
// })
// 
// buttonScarlet.addEventListener('click', function(){
//   openScarlet.classList.toggle('profile-window--open');
// });
// btnCloseScarlet.addEventListener('click', function(){
//   openScarlet.classList.toggle('profile-window--open');
// })
// 
// buttonFreddie.addEventListener('click', function(){
//   openFreddie.classList.toggle('profile-window--open');
// });
// btnCloseFreddie.addEventListener('click', function(){
//   openFreddie.classList.toggle('profile-window--open');
// })
// 
//
//
//
//Сам не нашел решения, на hubr мне тоже не помогли, попросил помощь друга. Получилось следующее:
let names = ['katrine', 'jennifer', 'woody', 'sophia', 'timmy', 'charly', 'scarlet', 'freddie'];
    names2 = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlet', 'Freddie']
for (let i = 0; i <= 7; i++) {

window[`button` + names2[i]] = document.querySelector(`.button-slider--${names[i]}`);
window[`open` + names2[i]] = document.querySelector(`.profile-window--${names[i]}`);
window[`btnClose` + names2[i]] = document.querySelector(`#${names[i]}`);

window[`button` + names2[i]].addEventListener('click', function(){
window[`open` + names2[i]].classList.toggle('profile-window--open');
});
window[`btnClose` + names2[i]].addEventListener('click', function(){
window[`open` + names2[i]].classList.toggle('profile-window--open');
});
//
//
//Попытка неудачная, работает не так, как я хочу.
// let cbox = document.querySelectorAll(".button--close-window");
// cbox.forEach(box => {
//   box.addEventListener('click', () =>
//   window[`open` + names2[i]].classList.toggle("profile-window--open"));
// });
}
});

