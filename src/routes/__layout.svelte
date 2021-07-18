<script>
  import {page} from '$app/stores';

  //TODO: Want this code?
  const pageStack = [];
  $: {
    pageStack.push($page.path);
    console.log('__layout.svelte: pageStack =', pageStack);
  }
</script>

<nav>
  <a href="page1">Page 1</a>
  <a href="page2">Page 2</a>
  <a href="page3">Page 3</a>
  <button on:click={() => history.back()}>Back</button>
</nav>
<slot />

<style>
  :root {
    --nav-height: 3rem;
  }

  :global(.page) {
    /* Pages use absolute positioning to support slide transitions. */
    position: absolute;
    top: var(--nav-height);

    box-sizing: border-box;
    height: calc(100vh - var(--nav-height));
    padding: 2rem;
    width: 100vw;
  }

  :global(.page p) {
    color: white;
    font-size: 2rem;
    margin-top: 0;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    box-sizing: border-box;
    height: var(--nav-height);
    padding: 0.5rem;
  }
</style>
