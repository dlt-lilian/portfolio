<script lang="ts">
	import '../app.css';
    import Header from "$lib/components/navigation/Header.svelte";
    import Footer from "$lib/components/navigation/Footer.svelte";

	let { children } = $props();
</script>

<Header />

<div class="mt-10 mb-10 min-h-screen max-w-6xl mx-auto">
    {@render children()}
</div>

<Footer />