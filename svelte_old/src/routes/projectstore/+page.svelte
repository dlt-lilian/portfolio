<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";

    // --- Données ---
    import Data from "$lib/data/Projects.json" with { type: "json" };
</script>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each Data.graphic as items}
        <div class="bg-cover aspect-[4/3] rounded-xl flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({items.img})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {items.title}
            </Text>
            <Button link={items.link}>
                {items.label}
            </Button>
        </div>
    {/each}

    {#each Data.code as items}
        <div class="bg-cover aspect-[4/3] rounded-xl flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({items.img})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {items.title}
            </Text>
            <Button link={items.link}>
                {items.label}
            </Button>
        </div>
    {/each}
</div>

