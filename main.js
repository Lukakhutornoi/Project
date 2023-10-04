import { drawSlides, changeSlide } from './slider.js';
import { getmenu, drawmenu } from './menu.js';
import { myFunction } from './navbar.js';

// Example usage:

// Fetch and draw the menu
getmenu()
  .then(data => drawmenu(data))
  .catch(error => console.error(error));

// Toggle navbar on some event (e.g., button click)
// document.querySelector("#navbarToggleBtn").addEventListener("click", myFunction);