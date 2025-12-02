<script>
    import Text from "$lib/components/ui/Text.svelte";
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Icon from "$lib/components/ui/Icon.svelte";
    import Badge from "$lib/components/ui/actions/Badge.svelte";

    // --- Données ---
    import Data from "$lib/data/Learning.json";

    // --- Variables d'état ---
    let openSchool = false;
    let openPersonal = false;
</script>

<!-- Titre principal -->
<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
    {Data.title}
</Text>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4">
    <!-- Carte Cursus scolaire -->
    <div class="space-y-5">

        <Button
                width="full"
                on:click={() => openSchool = !openSchool}
        >
            <Text type="h3">{Data.school.title}</Text>
            <Icon name="lucide:chevron-down" rotate={openSchool} />
        </Button>

        {#if openSchool}
            <div class="animate-fade-in space-y-2">
                {#each Data.school.content as item}
                    <Text type="h4">{item.title}</Text>
                    <Text type="p">{item.name}</Text>
                    <div>
                        <Text type="span">{item.year}</Text>
                        <Badge color={
                            item.certif === "obtenu" ? "success" :
                            item.certif === "En cours" ? "info" :
                            "error"
                        }>
                            {item.certif}
                        </Badge>
                    </div>
                {/each}
            </div>
        {/if}
    </div>

    <!-- Carte Apprentissage personnel -->
    <div class="space-y-5">

        <Button
                width="full"
                on:click={() => openPersonal = !openPersonal}
        >
            <Text type="h3">{Data.school.title}</Text>
            <Icon name="lucide:chevron-down" rotate={openPersonal} />
        </Button>

        {#if openPersonal}
            <div class="animate-fade-in space-y-2">
                {#each Data.personal.content as item}
                    <Text type="h4">{item.title}</Text>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in {
        animation: fade-in 0.3s ease-out;
    }
</style>