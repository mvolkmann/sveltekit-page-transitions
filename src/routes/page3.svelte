<script>
  import {slideIn, slideOut} from '../lib/transitions';
</script>

<section class="page" in:slideIn out:slideOut>
  <p>This is page #3.</p>
</section>

<style>
  section {
    background-color: blue;
  }
</style>
