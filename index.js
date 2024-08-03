const dot1 = document.getElementById('section-two-dot1');
const dot2 = document.getElementById('section-two-dot2');
const dot3 = document.getElementById('section-two-dot3');
const dot4 = document.getElementById('section-two-dot4');
const img = document.querySelector('#section-two-image');

const images = [
  'images/rectangle_1_copy_13.jpg', 
  'images/rectangle_1_copy_15.jpg',     
  'images/rectangle_1_copy_13.jpg', 
  'images/rectangle_1_copy_15.jpg'   
];

dot1.addEventListener('click', () => {
  img.src = images[0];
  updateActiveDot(dot1);
});

dot2.addEventListener('click', () => {
  img.src = images[1];
  updateActiveDot(dot2);
});

dot3.addEventListener('click', () => {
  img.src = images[2];
  updateActiveDot(dot3);
});

dot4.addEventListener('click', () => {
  img.src = images[3];
  updateActiveDot(dot4);
});

function updateActiveDot(activeDot) {
  const dots = [dot1, dot2, dot3, dot4];
  dots.forEach(dot => dot.classList.remove('active'));
  activeDot.classList.add('active');
}












document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('section-five-image-box');
  const prevArrow = document.querySelector('#section-five-image-slider .arrow.left');
  const nextArrow = document.querySelector('#section-five-image-slider .arrow.right');

  const slideWidth = slider.querySelector('img').clientWidth + 16; 
  const totalSlides = slider.children.length;
  let currentSlide = 0;

  function updateSlider() {

    const offset = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }

  prevArrow.addEventListener('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1; 
    }
    updateSlider();
  });

  nextArrow.addEventListener('click', function() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0; 
    }
    updateSlider();
  });

  
  updateSlider();
});




document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('#section-five-image-box');
  const prevArrow = document.querySelector('.section-five-image-silder .arrow.left');
  const nextArrow = document.querySelector('.section-five-image-silder .arrow.right');
  let offset = 0;

  prevArrow.addEventListener('click', function() {
    offset = (offset === 0) ? -100 : offset + 100;
    slider.style.transform = `translateX(${offset}%)`;
  });

  nextArrow.addEventListener('click', function() {
    offset = (offset === -200) ? 0 : offset - 100;
    slider.style.transform = `translateX(${offset}%)`;
  });
});


