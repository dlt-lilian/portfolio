<script lang="ts">
	import '../app.css';
    import Header from "$lib/components/navigation/Header.svelte";
    import Footer from "$lib/components/navigation/Footer.svelte";

	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />