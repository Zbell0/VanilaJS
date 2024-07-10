const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear;

const navToggle = document.querySelector('.nav-toggle');
const linksContaier = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  const containerHeight = linksContaier.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContaier.style.height = `${linksHeight}px`;
  } else {
    linksContaier.style.height = 0;
  }
});

const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const naveHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContaier.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains('fixed-nav');

    let position = element.offsetTop - naveHeight;
    console.log(element.offsetTop);

    //   // fixed navr 가 아니면
    if (!fixedNav) {
      position = position - naveHeight;
    }
    if (naveHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContaier.style.height = 0;
  });
});
