let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const totalSlides = slideItems.length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector('.next').onclick = () => showSlide(slideIndex + 1);
document.querySelector('.prev').onclick = () => showSlide(slideIndex - 1);

document.getElementById('menuToggle').onclick = () => {
  document.getElementById('navMenu').classList.toggle('show');
};