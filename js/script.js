import Glide from "@glidejs/glide";

const tips = document.querySelector(".tips__glide");
const apps = document.querySelector(".apps__glide");

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
    type: "carousel",
    autoplay: 0,
    animationDuration: 600,
    animationTimingFunc: "linear",
    perView: 3,
    focusAt: 0,
  }).mount();
}

// Accordion

const accordionButtons = document.querySelectorAll(".accordion__button");

accordionButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("expanded");
  });
});
