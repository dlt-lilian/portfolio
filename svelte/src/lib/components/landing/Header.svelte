<script>
    import Data from "$lib/data/Presentation.json" with { type:"json" };
    import Button from "$lib/components/ui/actions/Button.svelte" with { type:"json" };
    import Link from "$lib/components/ui/navigation/Link.svelte" with { type:"json" };
    import Text from "$lib/components/ui/Text.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <img src={Data.image}
         alt="Header"
         class="aspect-[4/3] w-full object-cover rounded-xl"
    />
    <div class="space-y-5">
        <Text type="p"
              class="mt-5">
            {Data.text}
        </Text>
        <Button link={Data.button.link}
                iconLeft={Data.button.icon}>
            {Data.button.text}
        </Button>
    </div>

</div>