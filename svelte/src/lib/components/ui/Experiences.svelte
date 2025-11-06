<script lang="ts">
    import Data from "$lib/data/Experiences.json" with { type: "json" };
    import Text from "$lib/components/ui/Text.svelte";

    // Type optionnel selon ta structure JSON
    type Poste = {
        entreprise: string;
        poste: string;
        duree: string;
        periode: string;
        type: string;
        description?: string;
        img?: string;
        link?: string;
    };

    let selectedPoste: Poste | null = null;

    function selectPoste(poste: Poste) {
        // Si on clique sur la même carte, on referme le panneau
        selectedPoste = selectedPoste === poste ? null : poste;
    }
</script>

<!-- Titre principal -->
<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
    {Data.title}
</Text>

<!-- Grille des cartes -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each Data.postes as items}
        <div
                class="p-4 rounded-xl shadow-xl cursor-pointer transform transition-transform hover:scale-105 bg-white"
                on:click={() => selectPoste(items)}>
            <Text type="h3" size="lg" weight="semibold">
                {items.entreprise}
            </Text>
            <Text type="p">{items.poste}</Text>
            <Text type="p">{items.duree}</Text>
            <Text type="p">{items.periode}</Text>
            <Text type="p">{items.type}</Text>
        </div>
    {/each}
</div>

<!-- Panneau de détails -->
<div class="mt-8 w-full h-max">
    {#if selectedPoste}
        <div class="bg-white rounded-xl shadow-xl p-6 animate-fade-in">
            <div class="flex items-start gap-4">
                <!-- Image / Logo de l’entreprise -->
                <div class="w-20 h-20 rounded-xl bg-black shadow-xl flex items-center justify-center">
                    {#if selectedPoste.img}
                        <img
                                src={selectedPoste.img}
                                alt={selectedPoste.entreprise}
                                class="object-contain w-full h-full p-2"
                        />
                    {:else}
                        <Text type="span" color="white" size="xl" weight="semibold">
                            {selectedPoste.entreprise.charAt(0)}
                        </Text>
                    {/if}
                </div>

                <!-- Détails -->
                <div class="flex-1 min-w-0">
                    <Text type="h3" size="lg" weight="bold">
                        {selectedPoste.entreprise}
                    </Text>
                    <Text type="p" weight="semibold">{selectedPoste.poste}</Text>
                    <Text type="p">{selectedPoste.periode} — {selectedPoste.duree}</Text>
                    <Text type="p">{selectedPoste.type}</Text>

                    {#if selectedPoste.description}
                        <div class="mt-3">
                            <Text type="p">{selectedPoste.description}</Text>
                        </div>
                    {/if}

                    {#if selectedPoste.link}
                        <a href={selectedPoste.link}
                           target="_blank"
                           class="text-blue-600 hover:underline mt-2 inline-block">
                            Voir plus →
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    {:else}
        <div class="bg-white rounded-xl shadow-xl p-6 flex items-center justify-center text-gray-400 animate-fade-in">
            <Text type="p"
                  size="sm"
                  iconLeft={Data.icon}>
                {Data.p}
            </Text>
        </div>
    {/if}
</div>

<style>
    /* petite animation d’apparition */
    .animate-fade-in {
        animation: fadeIn 0.3s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
