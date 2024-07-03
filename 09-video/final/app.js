let btn = document.querySelector('.switch-btn');
let video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
  if (btn.classList.contains('slide')) {
    btn.classList.remove('slide');
    video.play();
  } else {
    btn.classList.add('slide');
    video.pause();
  }
});

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
});
