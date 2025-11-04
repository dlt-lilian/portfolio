<script>
    import Data from "$lib/data/Presentation.json" with { type: "json" };

    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <img src={Data.about.image}
         alt="À propos"
         class="aspect-[4/3] w-full object-cover rounded-md"
    />

    <div class="md:col-span-3">
        <Text type="h2">
            {Data.about.title}
        </Text>
        <Text type="p">
            {Data.about.text}
        </Text>

        <Button link={Data.about.cv.link}>
            {Data.about.cv.label}
        </Button>
    </div>
</div>