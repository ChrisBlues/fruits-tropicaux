// Pour activer Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'));

document.addEventListener('DOMContentLoaded', () => {
  lightbox.style.display = 'none'; // Assure que le lightbox est masqué au chargement
});

let currentIndex = null;

function showImage(index) {
  const img = triggers[index];
  lightboxImg.src = img.getAttribute('data-full');
  lightboxImg.alt = img.alt;
  lightbox.style.display = 'flex';
  currentIndex = index;
}

triggers.forEach((img, index) => {
  img.addEventListener('click', () => showImage(index));
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + triggers.length) % triggers.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % triggers.length;
  showImage(currentIndex);
});

lightboxImg.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});
