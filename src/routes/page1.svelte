<script>
  import {slideIn, slideOut} from '../lib/transitions';
</script>

<section class="page" in:slideIn out:slideOut>
  <p>This is page #1.</p>
</section>

<style>
  section {
    background-color: red;
  }
</style>
