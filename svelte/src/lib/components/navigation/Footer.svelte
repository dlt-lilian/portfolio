<script lang="ts">
    import Text from "$lib/components/ui/Text.svelte";
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Divider from "$lib/components/ui/layout/Divider.svelte";

    import Data from "$lib/data/Navigation.json" with { type: "json" };
</script>

<footer class="flex justify-center bg-gray-100 p-5">
    <div class="w-full">
        <div class="grid grid-cols-3 mx-100">
            {#each Data.footer.columns as column}
                <div class="">
                    <Text type="h3"
                          weight="semibold"
                          align="center">
                        {column.title}
                    </Text>

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

        <Divider />

        <Text type="p"
              align="center">
            {Data.footer.copyright}
        </Text>
    </div>
</footer>