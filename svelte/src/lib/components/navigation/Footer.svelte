<script lang="ts">
    import Text from "$lib/components/ui/Text.svelte";
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Divider from "$lib/components/ui/layout/Divider.svelte";

    import Data from "$lib/data/Navigation.json" with { type: "json" };
</script>

<footer class="flex justify-center bg-gray-100 p-5">
    <div class="w-full">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:px-100 md:px-16 px-5">
            {#each Data.footer.columns as column}
                <div class="mb-5">
                    <Text type="h3"
                          weight="semibold"
                          align="center">
                        {column.title}
                    </Text>

                    <div class=" lg:hidden md:hidden block">
                        <div class="flex flex-col w-full">
                            {#each column.items as item}
                                <Button
                                        link={item.url}
                                        iconLeft={item.icon}
                                        variant="link"
                                        width="full"
                                        align="center">
                                    {item.label}
                                </Button>
                            {/each}
                        </div>
                    </div>

                    <div class="hidden lg:block md:block">
                        <div class="flex flex-col w-max">
                            {#each column.items as item}
                                <Button
                                        link={item.url}
                                        iconLeft={item.icon}
                                        variant="link">
                                    {item.label}
                                </Button>
                            {/each}
                        </div>
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