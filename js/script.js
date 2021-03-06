import Glide from "@glidejs/glide";

const tips = document.querySelector(".tips__glide");
const apps = document.querySelector(".apps__glide");
const ganar = document.querySelector(".ganar__glide");

// Tips Slider

if (tips) {
  new Glide(".tips__glide", {
    type: "carousel",
    autoplay: 0,
    animationDuration: 600,
    animationTimingFunc: "linear",
    perView: 3,
    focusAt: 0,
    breakpoints: {
      1024: {
        perView: 1,
      },
    },
  }).mount();
}

// Apps Slider

if (apps) {
  new Glide(".apps__glide", {
    type: "slider",
    autoplay: 0,
    animationDuration: 600,
    animationTimingFunc: "linear",
    perView: 3,
    focusAt: 0,
  }).mount();
}

// Ganar Slider

if (ganar) {
  new Glide(".ganar__glide", {
    type: "carousel",
    autoplay: 0,
    animationDuration: 600,
    animationTimingFunc: "linear",
    perView: 1,
    focusAt: 0,
  }).mount();
}

// Accordion

const accordionButtons = document.querySelectorAll(".accordion__button");
const catalogoAccordion = document.querySelector(
  ".catalogo-detalle__accordion"
);

accordionButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("expanded");
  });
});

catalogoAccordion.querySelector(".accordion__item").classList.add("expanded");

const closeModal = document.querySelector('.modal__close');

closeModal.addEventListener("click", (e) => {
  document.querySelector('.modal').close();
});

document.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') document.querySelector('.modal').close();
})
