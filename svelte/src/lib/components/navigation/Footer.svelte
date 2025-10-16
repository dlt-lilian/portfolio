<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Data from "$lib/data/Navigation.json" with { type: "json" };
</script>

<footer class="flex justify-center">
    <div class="w-full max-w-7xl px-4">
        <div class="flex justify-between">
            {#each Data.footer.columns as column}
                <div class="w-max">
                    <h3 class="w-max">
                        {column.title}
                    </h3>
                    <div class="flex flex-col w-max">
                        {#each column.items as item}
                            <Button
                                    link={item.url}
                                    iconLeft={item.icon}
                                    variant="link"
                            >
                                {item.label}
                            </Button>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

        <div class="w-full border-b-1 p-4"></div>
        <div class="w-full p-4">
            <p class="w-full text-center">
                {Data.footer.copyright}
            </p>
        </div>
    </div>
</footer>