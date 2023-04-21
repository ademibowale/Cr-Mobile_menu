const menuBtn = document.querySelector('.openNav');
const closeBtn = document.querySelector('.menu-list');
const contactLink = document.querySelector('.contact-link');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('myLinks').style.width = '100%';
  document.getElementById('myLinks').style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('myLinks').style.width = '0%';
});

portfolioLink.addEventListener('click', () => {
  document.getElementById('myLinks').style.width = '0%';
});
aboutLink.addEventListener('click', () => {
  document.getElementById('myLinks').style.width = '0%';
});
contactLink.addEventListener('click', () => {
  document.getElementById('myLinks').style.width = '0%';
});
