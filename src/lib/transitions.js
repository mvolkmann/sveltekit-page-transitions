import {browser} from '$app/env';

const duration = 500;

export function setBack(b) {
  back = b;
}

let back = false;

// If not running in server (SSR) code ...
if (browser) {
  // This registers a function to be called
  // when the browser back or forward button is pressed.
  // TODO: We need to only set back to true when the back button is pressed.
  window.onpopstate = () => {
    back = true;
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
