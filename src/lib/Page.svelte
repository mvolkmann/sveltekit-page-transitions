<script>
  import {slideIn, slideOut} from './transitions';

  export let name;
</script>

<section class="page {name}" in:slideIn out:slideOut>
  <slot />
</section>
