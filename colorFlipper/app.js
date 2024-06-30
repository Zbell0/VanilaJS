const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const backColor = getRandomNum();
  console.log(backColor);
  document.body.style.backgroundColor = colors[backColor];
  color.textContent = colors[backColor];
});

const getRandomNum = () => {
  return Math.floor(Math.random() * colors.length);
};
