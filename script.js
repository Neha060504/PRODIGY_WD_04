// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle navigation menu for small screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

// Close navigation menu when a link is clicked (for small screens)
navMenu.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// Add your additional JavaScript code here, if needed
