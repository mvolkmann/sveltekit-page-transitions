<script>
  import Page1 from './page1.svelte';
  import Page2 from './page2.svelte';
  import Page3 from './page3.svelte';

  const duration = 500;
  const pages = [Page1, Page2, Page3];
  const lastIndex = pages.length - 1;

  let back = false;
  let innerWidth = 0;
  let page = Page1;
  let pageIndex = 0;

  function changePage(goBack) {
    back = goBack;
    pageIndex += back ? -1 : 1;
    if (pageIndex < 0) pageIndex = lastIndex;
    if (pageIndex > lastIndex) pageIndex = 0;
    page = pages[pageIndex];
  }

  const slideIn = (node, back) => slide(back, 1);

  const slideOut = (node, back) => slide(back, -1);

  function slide(back, direction) {
    return {
      duration,
      css(t, u) {
        const tx = direction * innerWidth * u * (back ? -1 : 1);
        return `transform: translateX(${tx}px)`;
      }
    };
  }
</script>

<svelte:window bind:innerWidth />

<main>
  <nav>
    <button on:click={() => changePage(true)}>Previous</button>
    <button on:click={() => changePage(false)}>Next</button>
  </nav>
  {#key page}
    <section class="container" in:slideIn={back} out:slideOut={back}>
      <svelte:component this={page} />
    </section>
  {/key}
</main>

<style>
  .container {
    position: absolute;
    top: var(--nav-height);

    box-sizing: border-box;
    height: calc(100vh - var(--nav-height));
    width: 100vw;
    z-index: -1;
  }

  main {
    --nav-height: 3rem;

    height: 100vh;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    box-sizing: border-box;
    height: var(--nav-height);
    padding: 0.5rem;
  }

  :global(body) {
    margin: 0;
  }

  :global(.page) {
    box-sizing: border-box;
    color: white;
    font-size: 2rem;
    height: 100%;
    padding: 2rem;
    width: 100%;
  }

  :global(.page p) {
    margin-top: 0;
  }
</style>
