<script>
    import Button from "$lib/components/actions/Button.svelte";
    import Data from "$lib/data/Navigation.json";
</script>

<div class="footer flex justify-center space-x-4 py-4 shadow-md">
    {#each Data.footer as item}
        <Button
                link={item.url}
                iconLeft={item.icon}
                variant="ghost"
        >
            {item.label}
        </Button>
    {/each}
</div>