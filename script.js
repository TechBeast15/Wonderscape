

let slideIndex = 1;
let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startAutoSlide();

  // Pause slideshow on hover
  const container = document.querySelector('.slideshow-container');
  container.addEventListener('mouseenter', stopAutoSlide);
  container.addEventListener('mouseleave', startAutoSlide);

  // Attach event listeners to prev/next buttons
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (prevBtn) prevBtn.addEventListener('click', () => plusSlides(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => plusSlides(1));

  // Attach event listeners to dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
  });
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function startAutoSlide() {
  stopAutoSlide(); // Prevent multiple intervals
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 2500);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}
