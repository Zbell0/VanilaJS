const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btns = question.querySelectorAll('.question-btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      questions.forEach((item) => {
        if (item !== question) {
          item.classList.remove('show-text');
        }
      });

      question.classList.toggle('show-text');
    });
  });
});
