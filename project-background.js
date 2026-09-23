function createProjectStarField() {
  const page = document.querySelector('.project-page');
  if (!page) return;

  const field = document.createElement('div');
  field.className = 'star-field';
  field.setAttribute('aria-hidden', 'true');
  page.prepend(field);

  for (let index = 0; index < 70; index += 1) {
    const star = document.createElement('span');
    const size = 1 + Math.random() * 2.2;
    star.className = 'background-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    field.appendChild(star);

    const twinkle = () => {
      star.style.opacity = 0.15 + Math.random() * 0.8;
      star.style.transform = `scale(${0.8 + Math.random() * 1.5})`;
      setTimeout(twinkle, 500 + Math.random() * 3500);
    };
    setTimeout(twinkle, Math.random() * 2500);
  }

  const launchShootingStar = () => {
    const shootingStar = document.createElement('span');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = `${45 + Math.random() * 50}%`;
    shootingStar.style.top = `${Math.random() * 45}%`;
    field.appendChild(shootingStar);
    shootingStar.addEventListener('animationend', () => shootingStar.remove());
    setTimeout(launchShootingStar, 6000 + Math.random() * 9000);
  };

  setTimeout(launchShootingStar, 3500 + Math.random() * 5000);
}

createProjectStarField();
