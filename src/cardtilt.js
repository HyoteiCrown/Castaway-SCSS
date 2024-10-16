
const cards = document.querySelectorAll('.fourth-screen__container_card');


cards.forEach((card) => {
  let tiltX = 0;
  let tiltY = 0;

  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const targetTiltX = (x / width * 2 - 1) * 10;
    const targetTiltY = (y / height * 2 - 1) * 10;

    tiltX += (targetTiltX - tiltX) * 0.3; 
    tiltY += (targetTiltY - tiltY) * 0.3; 

    card.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
  });
}); 