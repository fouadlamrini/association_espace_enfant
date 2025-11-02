const missions = document.querySelectorAll('.about-details .mission');

missions.forEach((mission, index) => {
  mission.style.setProperty('--delay', `${index * 3}s`); // كل بطاقة تظهر بعد 0.3 ثانية من السابقة
});
