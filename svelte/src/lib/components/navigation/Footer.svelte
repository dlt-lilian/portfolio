<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Data from "$lib/data/Navigation.json";
</script>

<footer class="footer justify-center">
    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {#each Data.footer.columns as column}
                <div class="footer-column">
                    <h3>
                        {column.title}
                    </h3>
                    <div>
                        {#each column.items as item}
                            <Button
                                    link={item.url}
                                    iconLeft={item.icon}
                                    variant="ghost"
                            >
                                {item.label}
                            </Button>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

            {Data.footer.copyright}
        <p class="w-full text-center">
        </p>

    </div>
</footer>