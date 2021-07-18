<script>
  import Page from '../lib/Page.svelte';
</script>

<Page name="page1">
  <p>This is page #1.</p>
</Page>

<style>
  :global(.page1) {
    background-color: red;
  }
</style>
