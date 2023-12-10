<script>
  import "../app.css";
  import Navbar from "../lib/components/Navbar.svelte";
</script>

<main data-theme="light" class={`w-screen min-h-screen`}>
    <Navbar />
    <slot />
</main>
