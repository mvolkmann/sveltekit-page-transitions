<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<nav>
  <a href="page1">Page 1</a>
  <a href="page2">Page 2</a>
  <a href="page3">Page 3</a>
</nav>

<slot />

<style>
  :root {
    --nav-height: 3rem;
  }

  :global(body) {
    margin: 0;
  }

  :global(.page) {
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
