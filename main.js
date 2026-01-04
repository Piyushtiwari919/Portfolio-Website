const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.location-div');

// Toggle the menu
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link (optional but recommended for smooth UX)
document.querySelectorAll('.location-div a').forEach(link => {
  link.addEventListener('click', () => {
      menuToggle.classList.remove('is-active');
      navLinks.classList.remove('active');
  });
})
