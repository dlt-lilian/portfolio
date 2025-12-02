<script>
    import Data from "$lib/data/Presentation.json" with { type: "json" };

    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";

</script>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-cover aspect-[4/3] rounded-xl flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({Data.portfolio.graphic.image})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {Data.portfolio.graphic.title}
            </Text>
            <Button link={Data.portfolio.graphic.link}>
                {Data.portfolio.graphic.label}
            </Button>
        </div>

        <div class="bg-cover aspect-[4/3] rounded-xl flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({Data.portfolio.code.image})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {Data.portfolio.code.title}
            </Text>
            <Button link={Data.portfolio.code.link}>
                {Data.portfolio.code.label}
            </Button>
        </div>
    </div>