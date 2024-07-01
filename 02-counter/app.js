let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      count--;
    } else if (style.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count < 0) {
      value.style.color = 'red';
    } else if (count > 0) {
      value.style.color = 'green';
    } else {
      value.style.color = 'black';
    }
  });
});
