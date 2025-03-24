<script>
  import Component from "$lib/Component.svelte";
  import { m } from "$lib/paraglide/messages";
  import { locales, setLocale } from "$lib/paraglide/runtime";
</script>

<svelte:head>
  <title>Paraglide Demo</title>
  <meta name="description" content="Paraglide language switching demo" />
</svelte:head>

<section>
  <h1>Paraglide-JS Language Switching Demo</h1>

  <div class="language-switcher">
    {#each locales as locale}
      <button type="submit" onclick={() => setLocale(locale)}>{locale}</button>
    {/each}
  </div>

  <h3>{m.example_message({ username: "Test User" })}</h3>

  <Component></Component>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  .language-switcher {
    display: flex;
    gap: 0.5rem;
    margin: 2rem 0;
  }
</style>
