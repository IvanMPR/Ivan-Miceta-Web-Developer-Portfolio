'use-strict';

/* Play flip sound when emoji image is hovered */

const emoji = document.querySelector('.logo-img-container');
const flipSound = new Audio('sounds/369960__mischy__umblattern-kurz.wav');

emoji.addEventListener('mouseover', () => {
  setTimeout(() => {
    flipSound.play();
  }, 350);
});

/* Toggle light/dark theme functionality */

const theme = document.querySelector('.theme');
const lightStyleBulb = document.querySelector('.dark');
const darkStyleBulb = document.querySelector('.light');
const bulbsContainer = document.querySelector('.change-styles');

darkStyleBulb.addEventListener('click', function () {
  if (theme.getAttribute('href') === 'style-default.css') {
    theme.setAttribute('href', 'style-light.css');
    this.classList.add('hidden');
    lightStyleBulb.classList.remove('hidden');
  }
});

lightStyleBulb.addEventListener('click', function () {
  if (theme.getAttribute('href') === 'style-light.css') {
    theme.setAttribute('href', 'style-default.css');
    this.classList.add('hidden');
    darkStyleBulb.classList.remove('hidden');
  }
});

/* Hamburger menu functionality */

const navbar = document.querySelector('.navbar');

navbar.addEventListener('click', function (e) {
  if (!e.target.classList.contains('fa-bars')) return;
  const element = document.querySelector('.fa-bars');
  const { x, y } = element.getBoundingClientRect();
  const body = document.querySelector('body');
  console.log(x, y);

  const circle = document.createElement('span');
  circle.style.position = 'absolute';
  circle.style.zIndex = '55';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.transform = 'translate(-50%, -50%)';
  circle.style.width = '10rem';
  circle.style.height = '10rem';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = '#fff';
  circle.classList.add('scale-up');
  body.append(circle);
  setTimeout(() => {
    circle.remove();
  }, 1000);
  // appendModal();
  // setTimeout(() => {
  //   appendUl();
  // }, 600);
});

function appendModal() {
  const body = document.querySelector('body');
  const html = `<div class="modal">
      <div class="overlay">
        <span class="close-modal-btn">&#10005;</span>
      </div>
    </div>`;

  body.insertAdjacentHTML('beforeend', html);
}

function appendUl() {
  const overlay = document.querySelector('.overlay');
  const html = `<div class="menu">
  <ul class="ul-nav-links-modal slideInElement">
    <li class="link-container-modal">
      <a href="#" class="nav-link-modal active">
        <span class="ord-number-modal">01</span>home
      </a>
    </li>
    <li class="link-container-modal">
      <a href="#" class="nav-link-modal">
        <span class="ord-number-modal">02</span>projects
      </a>
    </li>
    <li class="link-container-modal">
      <a href="#" class="nav-link-modal">
        <span class="ord-number-modal">03</span>about
      </a>
    </li>
    <li class="link-container-modal">
      <a href="#" class="nav-link-modal">
        <span class="ord-number-modal">04</span>contact
      </a>
    </li>
  </ul>
</div>;`;

  overlay.insertAdjacentHTML('beforeend', html);

  overlay.addEventListener('click', function (e) {
    if (e.target.classList.contains('overlay')) {
      this.parentElement.remove();
    }
  });

  const x = document.querySelector('.close-modal-btn');

  x.addEventListener('click', function () {
    const grandpa = this.parentElement.parentElement;
    grandpa.remove();
  });
}

/* Button ripple effect */

const buttons = document.querySelectorAll('.btn-animated');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    rippleButton(e, button);
  });
});
const submitBtn = document.querySelector('.form-btn');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  rippleButton(e, this);
});
function rippleButton(event, element) {
  const x = event.offsetX;
  const y = event.offsetY;

  const circle = document.createElement('span');
  circle.style.position = 'absolute';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.transform = 'translate(-50%, -50%)';
  circle.style.width = '10rem';
  circle.style.height = '10rem';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = '#fff';
  circle.style.opacity = '0.8';
  circle.classList.add('ripple-btn');

  element.appendChild(circle);
  setTimeout(() => {
    element.removeChild(circle);
  }, 500);
}
