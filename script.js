'use strict';

const shooter = document.getElementById('needle-shooter-img');
const startLabel = document.querySelector('.start-label');
const body = document.querySelector('.body-sec');
const playArea = document.querySelector('.main-play-area');
const needleSec = document.querySelector('.needle-sec');

//* Init game
shooter.style.left = shooter.style.left + 48 + '%'; //Initalize starting needle shooter position
shooter.style.top = shooter.style.top + 78 + '%'; //Initalize starting needle shooter position

/* Needle shooter functionality */
function leftArrowPressed() {
  startLabel.classList.add('hidden'); //Hide start label on left key press
  shooter.style.left = parseInt(shooter.style.left) - 1 + '%'; //Reassigns left style (shifting needle by 1% to left)
}

function rightArrowPressed() {
  startLabel.classList.add('hidden'); //Hide start label on right key press
  shooter.style.left = parseInt(shooter.style.left) + 1 + '%'; //Reassigns left style (shifting needle by 1% to right)
}

function moveSelection(event) {
  switch (event.code) {
    case 'ArrowLeft':
      leftArrowPressed();
      break;
    case 'ArrowRight':
      rightArrowPressed();
      break;
    case 'Space':
      fireVLaser();
      break;
  }
}

//Call keyboard function on load
function docReady() {
  window.addEventListener('keydown', moveSelection);
}

//Laser/Vaccine Functionality
function fireVLaser() {
  console.log('******** 1: fireVLaser activated! ********');

  //   const xPos = shooter.style.left;
  console.log(`xPos ${shooter.style.left}`);
  //   const yPos = shooter.style.top;

  const newLaser = document.createElement('img');
  newLaser.src = 'images/laser-3.PNG';
  newLaser.classList.add('v-laser');
  //   newLaser.style.width = '5rem';
  newLaser.style.left = shooter.style.left;
  newLaser.style.top = shooter.style.top;
  //   newLaser.style.left = parseInt(shooter.style.left) + '%';
  //   newLaser.style.left = parseInt(shooter.style.left) + '%';
  //   newLaser.style.top = parseInt(shooter.style.top) - 10 + '%';

  //   playArea.appendChild(newLaser);
  needleSec.appendChild(newLaser);
}

// function fireVLaser() {
//   console.log('******** 1: fireVLaser activated! ********');
//   const vLaser = createVElement();
//   playArea.appendChild(vLaser);
//   moveVLaser(vLaser);
// }

// function createVElement() {
//   console.log('******** 2: createVElement activated! ********');
//   const xPos = shooter.style.left;
//   const yPos = shooter.style.top;
//   const newLaser = document.createElement('img');
//   newLaser.src = 'images/laser-3.PNG';
//   newLaser.classList.add('vaccine');
//   newLaser.style.left = parseInt(xPos) + '%';
//   newLaser.style.top = parseInt(yPos) - 10 + '%';
//   return newLaser;
// }

// function moveVLaser(vLaser) {
//   console.log('******* 3: moveVLaser activated! ********');
//   const vLaserInterval = setInterval(() => {
//     const xPos = vLaser.style.left;
//     vLaser.style.left = parseInt(xPos) + 4 + '%';
//   }, 1000);
// }

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

// function fireVLaser() {
//   console.log('******** 1: fireVLaser activated! ********');
//   const vLaser = createVElement();
//   playArea.appendChild(vLaser);
//   //   needleSec.appendChild(vLaser);
//   moveVLaser(vLaser);
// }

// function createVElement() {
//   console.log('******** 2: createVElement activated! ********');
//   const xPos = shooter.style.left;
//   console.log(`xPos ${xPos}`);
//   const yPos = shooter.style.top;
//   console.log(`yPos ${yPos}`);
//   const newLaser = document.createElement('img');
//   newLaser.src = 'images/laser-3.PNG';
//   newLaser.classList.add('vaccine');
//   newLaser.style.left = parseInt(xPos) + '%';
//   console.log(`newLaser.style.left ${newLaser.style.left}`);
//   newLaser.style.top = parseInt(yPos) - 10 + '%';
//   console.log(`newLaser.style.top ${newLaser.style.top}`);
//   console.log(`newLaser ${newLaser}`);
//   return newLaser;
// }

// function moveVLaser(vLaser) {
//   console.log('******* 3: moveVLaser activated! ********');
//   const vLaserInterval = setInterval(() => {
//     const xPos = vLaser.style.left;
//     console.log(`xPos ${xPos}`);
//     vLaser.style.left = parseInt(xPos) + 4 + '%';
//     console.log(`vLaser ${vLaser.style.left}`);
//   }, 1000);
// }
