'use strict';

let element = document.getElementById('needle-shooter-img');
element.style.left = element.style.left + 48 + '%'; //Initalize starting needle shooter position

function leftArrowPressed() {
  element.style.left = parseInt(element.style.left) - 1 + '%'; //Reassigns left style (shifting needle by 1% to left)
}

function rightArrowPressed() {
  element.style.left = parseInt(element.style.left) + 1 + '%'; //Reassigns left style (shifting needle by 1% to right)
}

function moveSelection(event) {
  switch (event.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
  }
}

//Call keyboard function on load
function docReady() {
  window.addEventListener('keydown', moveSelection);
}
