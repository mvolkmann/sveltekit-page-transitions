<script>
  import Nav from '../lib/Nav.svelte';
</script>

<section>
  <Nav on:page />
  <p>This is page #1.</p>
</section>

<style>
  section {
    background-color: red;
    box-sizing: border-box;
    color: white;
    font-size: 2rem;
    height: 100%;
    padding: 2rem;
    width: 100%;
  }

  :global(body) {
    margin: 0;
  }
</style>
