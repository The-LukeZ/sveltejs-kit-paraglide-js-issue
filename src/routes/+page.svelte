<script>
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcomeFallback from "$lib/images/svelte-welcome.png";
  import { m } from "$lib/paraglide/messages";
  import { locales, setLocale } from "$lib/paraglide/runtime";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcomeFallback} alt="Welcome" />
      </picture>
    </span>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/+page.svelte</strong>
  </h2>

  <div
    style="width: 100%; justify-content: center; display: flex; flex-direction: row; align-items: center; gap: 0.5rem"
  >
    {#each locales as locale}
      <button type="submit" onclick={() => setLocale(locale)}>{locale}</button>
    {/each}
  </div>

  <h3>{m.example_message({ username: "Test User" })}</h3>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
