<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Data from "$lib/data/test.json";
    import Text from "$lib/components/ui/Text.svelte";
</script>

<div class="mt-10 mb-10 space-y-20 min-h-screen max-w-6xl mx-auto px-4">

    <!-- Header -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <Text type="h1" size="xl" weight="semibold">
                {Data.title}
            </Text>
            <Text type="p">
                {Data.text}
            </Text>
        </div>
        <img
                src={Data.image}
                alt="Header"
                class="aspect-[4/3] w-full object-cover rounded-md"
        />
    </div>

    <!-- Portfolio -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-[url(https://picsum.photos/200/300)] bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4">
            <Text type="span">
                Projets graphiques
            </Text>
            <Button>
                Voir plus
            </Button>
        </div>

        <div class="bg-[url(https://picsum.photos/200/300)] bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4">
            <Text type="span">
                Projets codes
            </Text>
            <Button>
                Voir plus
            </Button>
        </div>
    </div>

    <!-- Compétences -->
    <div>
        <Text type="h2">
            Compétences
        </Text>
        <Text type="p">
            Section compétences à développer...
        </Text>
    </div>

    <!-- À propos -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-3">
            <Text type="h2">
                {Data.title}
            </Text>
            <Text type="p">
                {Data.text}
            </Text>
        </div>
        <img
                src={Data.image}
                alt="À propos"
                class="aspect-[4/3] w-full object-cover rounded-md"
        />
    </div>

    <!-- Contact -->
    <div>
        <Text type="h2">
            Contact
        </Text>
        <Text type="p">
            Section contact à développer...
        </Text>
    </div>

</div>