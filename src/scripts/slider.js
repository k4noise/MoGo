slider(".section-4 .slider");
slider(".section-6 .slider");

const htmlDataToDataset = (str) =>
  str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "");
  });

function slider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);
  slider
    .querySelector(".slider__wrapper-button-right")
    .addEventListener("click", () => nextSlide("data-is-open", slider));
  slider
    .querySelector(".slider__wrapper-button-left")
    .addEventListener("click", () => prevSlide("data-is-open", slider));
}
const nextSlide = (data, slider) => {
  const openedSlide = slider.querySelector(`[${data}='true']`);
  openedSlide.dataset.isOpen = false;
  let nextSlide = openedSlide.nextElementSibling;

  if (nextSlide.tagName === "IMG") {
    nextSlide = slider.querySelector(`[${data}='false']`);
  }

  nextSlide.dataset.slide = "next";
  nextSlide.dataset.isOpen = true;
};

const prevSlide = (data, slider) => {
  const openedSlide = slider.querySelector(`[${data}='true']`);
  openedSlide.dataset.isOpen = false;
  let nextSlide = openedSlide.previousElementSibling;

  if (nextSlide.tagName === "IMG") {
    nextSlide = slider.querySelector(`[${data}='false']:last-of-type`);
  }

  nextSlide.dataset.slide = "prev";
  nextSlide.dataset.isOpen = true;

};
