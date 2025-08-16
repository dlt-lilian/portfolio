<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Test from "$lib/data/test.json" with { type:"json" };
    import Text from "$lib/components/ui/Text.svelte";
    import Data from "$lib/data/Landing.json" with { type: "json" };
</script>

<div class="mt-10 mb-10 space-y-20 min-h-screen max-w-6xl mx-auto px-4">

    <!-- Header -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <Text type="h1" size="xl" weight="semibold">
                {Data.header.title[0]}
            </Text>

            <Text type="h2" size="lg" weight="semibold">
                {Data.header.title[1]}
            </Text>

            <Text type="p" class="mt-5">
                {Data.header.text}
            </Text>
        </div>
        <img
                src={Data.header.image}
                alt="Header"
                class="aspect-[4/3] w-full object-cover rounded-md"
        />
    </div>

    <!-- Portfolio -->
    <!-- Fusionner les 2 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({Data.portfolio.graphic.image})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {Data.portfolio.graphic.title}
            </Text>
            <Button>
                {Data.portfolio.graphic.label}
            </Button>
        </div>

        <div class="bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({Data.portfolio.code.image})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {Data.portfolio.code.title}
            </Text>
            <Button>
                {Data.portfolio.code.label}
            </Button>
        </div>
    </div>

    <!-- Compétences -->
    <div>
        <Text type="h2">
            {Data.competences.title}
        </Text>
        <Text type="p">
            {Test.indev}
        </Text>
    </div>

    <!-- À propos -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <img
                src={Data.about.image}
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

            <Button>
                {Data.about.label}
            </Button>
        </div>
    </div>

    <!-- Contact -->
    <div>
        <Text type="h2">
            {Data.contact.title}

        </Text>
        <Text type="p">
            {Test.indev}
        </Text>
    </div>

</div>