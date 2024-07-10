const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  btns.forEach((btn) => {
    btn.classList.remove('active');
    e.target.classList.add('active');
  });

  articles.forEach((article) => {
    article.classList.remove('active');
  });

  const element = document.getElementById(id);
  console.log(element);

  element.classList.add('active');
});
