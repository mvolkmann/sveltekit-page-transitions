import {browser} from '$app/env';

const duration = 500;

let back = false;

// If not running in server (SSR) code ...
if (browser) {
  // This registers a function to be called
  // when the browser back button is pressed.
  window.onpopstate = () => {
    back = true;
    // Reset back when the transition is complete.
    // await tick(); does not work as a replacement for setTimeout here.
    //TODO: Why use 200?
    setTimeout(() => (back = false), 200);
  };
}

export const slideIn = () => slide(1);

export const slideOut = () => slide(-1);

export function slide(direction) {
  console.log('transitions.js slide: back =', back);
  return {
    duration,
    css(t, u) {
      const tx = direction * innerWidth * u * (back ? -1 : 1);
      return `transform: translateX(${tx}px)`;
    }
  };
}
