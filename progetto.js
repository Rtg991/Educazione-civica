document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cylinder-card');
  const totalCards = cards.length;
  const angleStep = 360 / totalCards;
  let currentAngle = 0;

  function animate() {
    currentAngle += 0.3;
    cards.forEach((card, i) => {
      const cardAngle = i * angleStep + currentAngle;
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(450px) rotateY(${-cardAngle + 105}deg)`;
    });
    requestAnimationFrame(animate);
  }

  animate();
});