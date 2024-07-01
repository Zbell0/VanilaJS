const sideBar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function () {
  sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sideBar.classList.toggle('show-sidebar');
});
