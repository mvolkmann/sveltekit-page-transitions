<script>
  import {reset, slideIn, slideOut} from './transitions';

  export let name;

  let activeTransitions = 0;

  function endTransition() {
    activeTransitions--;
    if (activeTransitions === 0) reset();
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
