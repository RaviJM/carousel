images = document.querySelectorAll(".imag");
const leftBtn = document.querySelector("#left-button");
const rightBtn = document.querySelector("#right-button");
let counter = 0;

images.forEach((image, index) => {
  image.style.left = `${index * 100}%`;
});

function next() {
  counter++;
  if (counter == images.length) counter = 0;
  slideImage();
}

function prev() {
  counter--;
  if (counter == -1) counter = 3;
  slideImage();
}

leftBtn.addEventListener("click", prev);
rightBtn.addEventListener("click", next);

const slideImage = () => {
  images.forEach((image) => {
    image.style.transform = `translateX(-${counter * 100}%)`;
  });
};
