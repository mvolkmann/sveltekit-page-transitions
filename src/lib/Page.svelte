<script>
  import {reset, slideIn, slideOut} from './transitions';

  export let name;

  let activeTransitions = 0;

  function endTransition() {
    activeTransitions--;
    if (activeTransitions === 0) {
      //TODO: Could you use this to detect if the back or forward button
      //TODO: was pressed in the onpopstate function in transistions.js?
      // Add data to the history state object that was pushed.
      //history.replaceState({count = ?});
      reset();
    }
  }

  function startTransition() {
    activeTransitions++;
  }
</script>

<section
  class="page {name}"
  in:slideIn
  out:slideOut
  on:introstart={startTransition}
  on:introend={endTransition}
  on:outrostart={startTransition}
  on:outroend={endTransition}
>
  <slot />
</section>
