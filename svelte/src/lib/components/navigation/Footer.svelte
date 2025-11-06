<script lang="ts">
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Divider from "$lib/components/ui/layout/Divider.svelte";

    import Data from "$lib/data/Navigation.json" with { type: "json" };
</script>

<footer class="flex justify-center bg-gray-100 p-5">
    <div class="w-full">
        <div class="grid grid-cols-3 mx-100">
            {#each Data.footer.columns as column}
                <div class="">
                    <h3 class=" w-full text-center">
                        {column.title}
                    </h3>
                    <div class="flex flex-col justify-center">
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

        <Divider />

            <p class="w-full text-center">
                {Data.footer.copyright}
            </p>
    </div>
</footer>