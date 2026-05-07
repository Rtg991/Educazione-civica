document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cylinder-card');
  const totalCards = cards.length;
  const angleStep = 360 / totalCards;
  let currentAngle = 0;

  // Calcolo dinamico del raggio (Z) in base alla larghezza dello schermo
  // Se lo schermo è piccolo (mobile), riduciamo il raggio
  let radius = window.innerWidth < 768 ? 350 : 550;

  function animate() {
    currentAngle += 0.2; // Velocità leggermente ridotta per leggibilità
    cards.forEach((card, i) => {
      const cardAngle = i * angleStep + currentAngle;
      
      // translateZ(radius) allontana le foto dal centro
      // rotateY(${-cardAngle}deg) mantiene le foto rivolte verso l'utente
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px) rotateY(${-cardAngle}deg)`;
      
      // Opzionale: Effetto dissolvenza per le card sul retro
      const normalizedAngle = (cardAngle % 360);
      if (normalizedAngle > 90 && normalizedAngle < 270) {
          card.style.opacity = "0.3"; // Foto dietro meno visibili
      } else {
          card.style.opacity = "1";
      }
    });
    requestAnimationFrame(animate);
  }

  animate();

  // Aggiorna il raggio se l'utente ridimensiona la finestra
  window.addEventListener('resize', () => {
    radius = window.innerWidth < 768 ? 350 : 550;
  });
});
