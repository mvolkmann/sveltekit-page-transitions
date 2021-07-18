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
    setTimeout(() => (back = false), 200);
  };
}

export function goBack() {
  back = true;
  history.back();
  // await tick(); does not work as a replacement for setTimeout here.
  // Reset back when the transition is complete.
  setTimeout(() => (back = false), 200); //TODO: Why this time?
}

export const slideIn = () => slide(1);

export const slideOut = () => slide(-1);

export function slide(direction) {
  return {
    duration,
    css(t, u) {
      const tx = direction * innerWidth * u * (back ? -1 : 1);
      return `transform: translateX(${tx}px)`;
    }
  };
}
