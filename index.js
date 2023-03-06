const btnOpen = document.getElementById('hamburger-icon');
const btnClose = document.getElementById('close-btn');
const nav = document.getElementById('mobile-nav');
const mobileMenuLinks = nav.querySelectorAll('a');

btnOpen.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

btnClose.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.add('hidden');
  });
});