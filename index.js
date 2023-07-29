const links = document.querySelectorAll("nav li");

menuBurger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

// *****************slide delice************************
const items = document.querySelectorAll(".slider div");
const nbSlide = items.length;
const next = document.querySelector(".right");
const prevous = document.querySelector(".left");
let count = 0;

// on va maintenant soccuper du bouton suivant.
function slideNext() {
  items[count].classList.remove("active");
  //items de count egal 0, parceque count egal 0 et items est le tableau dimages quon a cree tout au debut. et donc en fonction du nombre dimages dont nous possédons. on lui remove la classe active ce  qui va lui faire passer de display block (de img.active) a display none (de .slide img).

  //   et maintenant on va faire apparaitre limage suivante.
  if (count < nbSlide - 1) {
    count++;
    // ici on a choisi de faire nbSlide - 1 afin de nous permettre daller jusqua la derniere image de notre tableau, vu que ce dernier commence par 0.
  } else {
    count = 0;
  }

  items[count].classList.add("active");
}
next.addEventListener("click", slideNext);

// on va maintenant soccuper du bouton precedent.
function slidePrevous() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  items[count].classList.add("active");
}
prevous.addEventListener("click", slidePrevous);

// setInterval("slideNext()", 5000);

// on va gerer maintent les fleches directionnelles de notre clavier. a noter quelles ont tous un code et on va lutiliser pour faire la fonction.
function keyPress(e) {
  if (e.keyCode === 37) {
    slidePrevous();
  } else if (e.keyCode === 39) {
    slideNext();
  }
}

document.addEventListener("keydown", keyPress);

const item = document.querySelectorAll(".photo_article img");
const nbSlid = item.length;
const suivant = document.querySelector(".droite");
const precedent = document.querySelector(".gauche");
let nbr = 0;
function slidNext() {
  item[nbr].classList.remove("active");
  if (nbr < nbSlid - 1) {
    nbr++;
  } else {
    nbr = 0;
  }

  item[nbr].classList.add("active");
}
suivant.addEventListener("click", slidNext);
function slidPrevous() {
  item[nbr].classList.remove("active");

  if (nbr > 0) {
    nbr--;
  } else {
    nbr = nbSlid - 1;
  }
  item[nbr].classList.add("active");
}
precedent.addEventListener("click", slidPrevous);
function keyPress(e) {
  if (e.keyCode === 37) {
    slidPrevous();
  } else if (e.keyCode === 39) {
    slidNext();
  }
}

document.addEventListener("keydown", keyPress);

setInterval("slidNext(1)", 5000);
