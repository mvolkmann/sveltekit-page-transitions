<script>
  import Nav from '../lib/Nav.svelte';
</script>

<section>
  <Nav on:page />
  <p>This is page #2.</p>
</section>

<style>
  section {
    background-color: green;
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
