<script>
    import Text from "$lib/components/ui/Text.svelte";
    import Carousel from "$lib/components/ui/display/Carousel.svelte";

    // --- Données ---
    import data from "$lib/data/Projects.json" with { type: "json" };
    import Link from "$lib/components/ui/navigation/Link.svelte";

    //--- Fonction pour transformer les items JSON en objets ---
    const toCarouselItems = (items) =>
        items.map((item) => ({ image: item.img, title: item.title, alt: item.title, link: item.link }));
</script>

<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
    {data.title}
</Text>

<div class="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
    <!-- Carousel pour les items graphic -->
    <div class="space-y-2 w-full">
        <Text type="h4"
              weight="semibold"
              align="center"
              iconLeft={data.type[0].icon}>
            {data.type[0].text}
        </Text>
        <Link to={data.others.link}>
        <Carousel items={toCarouselItems(data.others)}
                  aspect="old"/>
        </Link>

    </div>

    <!-- Carousel pour les items code -->
    <div class="space-y-2">
        <Text type="h4"
              weight="semibold"
              align="center"
              iconLeft={data.type[1].icon}>
            {data.type[1].text}
        </Text>
    <Carousel items={toCarouselItems(data.code)}
              aspect="old"/>
    </div>
</div>
