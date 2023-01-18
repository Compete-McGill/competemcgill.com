const carousel = document.getElementById("sponsor_crsl");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;
const images = carousel.children;
const imagesCount = images.length;

prevButton.addEventListener("click", () => {
  console.log(images, imagesCount);
  if (currentIndex === 0) {
    currentIndex = imagesCount - 1;
  } else {
    currentIndex--;
  }
  carousel.style.marginLeft = `-${currentIndex * 100}%`;
});

nextButton.addEventListener("click", () => {
  if (currentIndex === imagesCount - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  carousel.style.marginLeft = `-${currentIndex * 100}%`;
});
