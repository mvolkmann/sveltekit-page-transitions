<script>
  import Nav from '../lib/Nav.svelte';
</script>

<section>
  <Nav on:page />
  <p>This is page #3.</p>
</section>

<style>
  section {
    background-color: blue;
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
