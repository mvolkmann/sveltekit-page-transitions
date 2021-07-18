<script>
  import Page from '../lib/Page.svelte';
</script>

<Page name="page3">
  <p>This is page #3.</p>
</Page>

<style>
  :global(.page3) {
    background-color: blue;
  }
</style>
