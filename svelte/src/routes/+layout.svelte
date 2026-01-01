<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';

    import Header from "$lib/components/navigation/Header.svelte";
    import Footer from "$lib/components/navigation/Footer.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main class="mt-10 mb-10 min-h-screen max-w-6xl mx-auto">
    {@render children()}
</main>

<Footer />