const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (index === i) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function prevSlide() {
  currentSlide -= 1;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide += 1;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

document.querySelector(".prev-btn").addEventListener("click", prevSlide);
document.querySelector(".next-btn").addEventListener("click", nextSlide);
