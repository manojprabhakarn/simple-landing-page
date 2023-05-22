// // this is my javascript code
// console.log('hello manoj');
// Smooth scrolling 
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
