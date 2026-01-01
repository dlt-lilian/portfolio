<script lang="ts">
	import '../app.css';
    import Header from "$lib/components/navigation/Header.svelte" with { type: "json" };
    import Footer from "$lib/components/navigation/Footer.svelte" with { type: "json" };

	let { children } = $props();
</script>

<Header />

<div class="mt-10 mb-10 min-h-screen max-w-6xl mx-auto">
    {@render children()}
</div>

<Footer />