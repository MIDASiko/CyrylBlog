
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
let index = 0;

function showSlide(n) {
  index = (n + slideElements.length) % slideElements.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').onclick = () => showSlide(index + 1);
document.querySelector('.prev').onclick = () => showSlide(index - 1);
setInterval(() => showSlide(index + 1), 5000);

// Подсветка активной ссылки в меню
const navLinks = document.querySelectorAll('nav a');

function setActiveLink() {
  let fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();
