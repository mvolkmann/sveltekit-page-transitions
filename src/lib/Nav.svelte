<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<nav>
  <!--a href="page1">Page 1</a>
  <a href="page2">Page 2</a>
  <a href="page3">Page 3</a-->

  <button on:click={() => dispatch('page', {back: true})}>Previous</button>
  <button on:click={() => dispatch('page')}>Next</button>
</nav>
