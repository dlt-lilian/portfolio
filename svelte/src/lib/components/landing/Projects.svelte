<script>
    import Text from "$lib/components/ui/Text.svelte";
    import Carousel from "$lib/components/ui/display/Carousel.svelte";

    // --- Données ---
    import Data from "$lib/data/Projects.json" with { type: "json" };
    import Link from "$lib/components/ui/navigation/Link.svelte";

    //--- Fonction pour transformer les items JSON en objets ---
    const toCarouselItems = (items) =>
        items.map((item) => ({ image: item.img, title: item.title, alt: item.title, link: item.link }));
</script>

<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
    {Data.title}
</Text>

<div class="grid grid-cols-2 gap-4">
    <!-- Carousel pour les items graphic -->
    <div class="space-y-2 w-full">
        <Text type="h4"
              weight="semibold"
              align="center"
              iconLeft={Data.type[0].icon}>
            {Data.type[0].text}
        </Text>
        <Link to={Data.others.link}>
        <Carousel items={toCarouselItems(Data.others)}
                  aspect="old"/>
        </Link>

    </div>

    <!-- Carousel pour les items code -->
    <div class="space-y-2">
        <Text type="h4"
              weight="semibold"
              align="center"
              iconLeft={Data.type[1].icon}>
            {Data.type[1].text}
        </Text>
    <Carousel items={toCarouselItems(Data.code)}
              aspect="old"/>
    </div>
</div>
