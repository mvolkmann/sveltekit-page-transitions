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

  function changePage(event) {
    back = Boolean(event.detail && event.detail.back);
    pageIndex += back ? -1 : 1;
    if (pageIndex < 0) pageIndex = lastIndex;
    if (pageIndex > lastIndex) pageIndex = 0;
    page = pages[pageIndex];
  }

  const slideIn = (node, back) => slide(node, back, 1);

  const slideOut = (node, back) => slide(node, back, -1);

  function slide(node, back, direction) {
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

{#key page}
  <main class="route" in:slideIn={back} out:slideOut={back}>
    <svelte:component this={page} on:page={changePage} />
  </main>
{/key}

<style>
  .route {
    --margin-top: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: absolute;
    top: 0;
    /* top: var(--margin-top); */

    box-sizing: border-box;
    /* min-height: 100vh; */
    /* height: calc(100vh - var(--margin-top)); */
    height: 100vh;
    width: 100vw;
  }
</style>
