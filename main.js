// Mobile Navigation
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Profession Text Animation
const professions = ['Web Developer','Artist'];
let currentIndex = 0;
const professionElement = document.getElementById('profession');

function updateProfession() {
    professionElement.style.opacity = '0';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % professions.length;
        professionElement.textContent = professions[currentIndex];
        professionElement.style.opacity = '1';
    }, 500);
}

setInterval(updateProfession, 3000);

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = percentage + '%';
    });
  });
  