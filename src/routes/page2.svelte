<script>
  import {slideIn, slideOut} from '../lib/transitions';
</script>

<section class="page" in:slideIn out:slideOut>
  <p>This is page #2.</p>
</section>

<style>
  section {
    background-color: green;
  }
</style>
