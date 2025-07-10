// Dropdown Menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

// Slider
let slideIndex = 0;
const slides = document.getElementsByClassName('slide-image');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
  moveToNextSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('active-slide');
  }
  slides[slideIndex].classList.add('active-slide');
}

function moveToNextSlide() {
  if (slideIndex === totalSlides - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slideIndex === 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex--;
  }
  updateSlidePosition();
}

// Inisialisasi slider
updateSlidePosition();

// Aos Animation