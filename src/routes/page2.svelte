<script>
  import Page from '../lib/Page.svelte';
</script>

<Page name="page2">
  <p>This is page #2.</p>
</Page>

<style>
  :global(.page2) {
    background-color: green;
  }
</style>
