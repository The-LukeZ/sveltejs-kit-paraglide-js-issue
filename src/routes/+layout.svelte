<script>
  import { page } from "$app/state";
  import { locales, localizeHref } from "$lib/paraglide/runtime";
  import "../app.css";

  let { children } = $props();
</script>

<div class="app">
  <header>
    <h1>Change site</h1>
    <div style="display: flex; flex-direction: row; width: 100%; justify-content: center; gap: 0.5rem;">
      <a href={localizeHref("/")}>Home</a>
      <a href={localizeHref("/subroute")}>Subroute</a>
    </div>
    <main>
      {@render children()}
    </main>

    <footer>
      <p>
        visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn
        about SvelteKit
      </p>
    </footer>
  </header>
</div>

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
