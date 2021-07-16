<script>
  import Page1 from './page1.svelte';
  import Page2 from './page2.svelte';
  import Page3 from './page3.svelte';

  const duration = 500;
  const paths = [Page1, Page2, Page3];

  let component = Page1;
  let innerWidth = 0;

  let currentComponent = 0;
  let back = false;

  function changePage(event) {
    back = Boolean(event.detail && event.detail.back);
    console.log('index.svelte changePage: back =', back);
    currentComponent = (currentComponent + 1) % paths.length;
    component = paths[currentComponent];
  }

  function slideIn(node, {back}) {
    const w = innerWidth;
    return {
      duration,
      css(t, u) {
        return `transform: translateX(${back ? -w * u : w * u}px)`;
      }
    };
  }

  function slideOut(node, {back, width}) {
    const w = innerWidth;
    return {
      duration,
      css(t, u) {
        return `transform: translateX(${back ? w * u : -w * u}px)`;
      }
    };
  }
</script>

<svelte:window bind:innerWidth />

{#key component}
  <main class="route" in:slideIn={{back}} out:slideOut={{back}}>
    <svelte:component this={component} on:page={changePage} />
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
