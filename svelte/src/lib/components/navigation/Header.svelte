<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import data from "$lib/data/Navigation.json" with { type: "json" };
    import { onMount } from "svelte";

    let isScrolled = $state(false);

    onMount(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                const headerBottom = header.offsetTop + header.offsetHeight;
                isScrolled = window.scrollY >= headerBottom;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<div class="navbar justify-center space-x-2 shadow-xl sticky top-0 z-[100] transition-colors duration-300 {isScrolled ? 'bg-white' : 'bg-black'}">
    {#each data.navbar as item}
        {#if isScrolled}
            <Button
                    link={item.url}
                    iconLeft={item.icon}
                    variant="ghost">
                {item.label}
            </Button>
        {:else }
            <Button
                    link={item.url}
                    iconLeft={item.icon}
                    variant="primary">
                {item.label}
            </Button>
        {/if}
    {/each}
</div>