<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Data from "$lib/data/Navigation.json" with { type: "json" };
</script>

<div class="navbar justify-center space-x-2 shadow-xl sticky top-0 z-100 bg-white">
    {#each Data.navbar as item}
        <Button
                link={item.url}
                iconLeft={item.icon}
                variant="ghost"
        >
            {item.label}
        </Button>
    {/each}
</div>