<script>
  import Component from "$lib/Component.svelte";
  import { m } from "$lib/paraglide/messages";
</script>

<h1>Example Message</h1>

<p>{m.example_message({ username: "Some user" })}</p>

<Component />
