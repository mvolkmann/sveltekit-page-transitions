import {get, writable} from 'svelte/store';

const duration = 500;

export const backStore = writable(false);

export const slideIn = (node, back) => slide(back, 1);

export const slideOut = (node, back) => slide(back, -1);

export function slide(back, direction) {
  return {
    duration,
    css(t, u) {
      //const tx = direction * innerWidth * u * (back ? -1 : 1);
      const back = get(backStore);
      console.log('transitions.js slide: back =', back);
      const tx = direction * innerWidth * u * (back ? -1 : 1);
      return `transform: translateX(${tx}px)`;
    }
  };
}
