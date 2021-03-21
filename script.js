'use strict';

const element = document.getElementById('needle-shooter-img');
const startLabel = document.querySelector('.start-label');

//* Init game
element.style.left = element.style.left + 48 + '%'; //Initalize starting needle shooter position

/* Needle shooter functionality */
function leftArrowPressed() {
  startLabel.classList.add('hidden'); //Hide start label on left key press
  element.style.left = parseInt(element.style.left) - 1 + '%'; //Reassigns left style (shifting needle by 1% to left)
}

function rightArrowPressed() {
  startLabel.classList.add('hidden'); //Hide start label on right key press
  element.style.left = parseInt(element.style.left) + 1 + '%'; //Reassigns left style (shifting needle by 1% to right)
}

function moveSelection(event) {
  switch (event.code) {
    case 'ArrowLeft':
      leftArrowPressed();
      break;
    case 'ArrowRight':
      rightArrowPressed();
      break;
  }
}

//Call keyboard function on load
function docReady() {
  window.addEventListener('keydown', moveSelection);
}

//Left-right funcitonality - from 2013 browsers
// function moveSelection(event) {
//   switch (event.keyCode) {
//     case 37:
//       leftArrowPressed();
//       break;
//     case 39:
//       rightArrowPressed();
//       break;
//   }
// }
