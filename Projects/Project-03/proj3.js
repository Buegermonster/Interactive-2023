const image = document.getElementById('moving-image');

image.addEventListener('click', () => {
  image.style.setProperty('--image-width', `${image.clientWidth}px`);
  image.style.animationName = 'move';
});
