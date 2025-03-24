<script>
  import { locales, setLocale } from "./paraglide/runtime";
</script>

<div class="language-switcher">
  {#each locales as locale}
    <button type="submit" onclick={() => setLocale(locale)}>{locale}</button>
  {/each}
</div>

<style>
  .language-switcher {
    display: flex;
    gap: 0.5rem;
    margin: 2rem 0;
  }
</style>
