const nav = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.navigation__link');
const burgerMenu = document.querySelector('.burger-navigation');
const burgerElements = document.querySelectorAll('.burger-navigation__item');

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');

  for (const span of burgerElements) {
    span.classList.toggle('active');
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    nav.classList.remove('active');

    burgerElements.forEach((span) => {
      span.classList.remove('active');
    });
  });
});
