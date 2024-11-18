

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if (question.classList.contains('active')) {
      question.querySelector('.toggle-icon').textContent = '−';
      answer.style.display = 'block';
    } else {
      question.querySelector('.toggle-icon').textContent = '+';
      answer.style.display = 'none';
    }
  });
});
