const cards = document.querySelectorAll('.activity-card');

cards.forEach((card, index) => {
  card.style.setProperty('--delay', `${index * 1}s`);
});
