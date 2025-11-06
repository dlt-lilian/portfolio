<script>
    import Data from "$lib/data/Presentation.json" with { type:"json" };

    import Text from "$lib/components/ui/Text.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
        <Text type="h1"
              size="xl"
              weight="semibold">
            {Data.header.title[0]}
        </Text>

        <Text type="h2"
              size="lg"
              weight="semibold">
            {Data.header.title[1]}
        </Text>

        <Text type="p"
              class="mt-5">
            {Data.header.text}
        </Text>
    </div>
    <img src={Data.header.image}
         alt="Header"
         class="aspect-[4/3] w-full object-cover rounded-xl"
    />
</div>