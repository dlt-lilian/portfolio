<script lang="ts">
    import Text from "$lib/components/ui/Text.svelte";

    // --- Typage ---
    type Skill = {
        name: string;
        img?: string;
        children?: Skill[];
    };


    // --- Données ---
    import Data from "$lib/data/Skilltree.json" with { type: "json" };

    // --- Variables d'état ---
    let selectedSkill: Skill | null = null;
    let hoveredSkill: Skill | null = null;

    // --- Fonctions ---
    function selectSkill(skill: Skill): void {
        selectedSkill = selectedSkill?.name === skill.name ? null : skill;
    }
</script>

<div>
    <Text type="h2"
          size="lg">
        {Data.h2}
    </Text>
    <Text type="p">
        {Data.p}
    </Text>
    <div class="relative">
        <!-- Conteneur de l'arbre circulaire -->
        <div class="relative mx-auto" style="width: min(900px, 100%); height: min(900px, 100vw);">

            <!-- Centre - Nœud racine -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div class="w-24 h-24 rounded-full bg-black shadow-2xl flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
                    <span class="text-white font-bold text-lg">{Data.name}</span>
                </div>
            </div>

            <!-- Branches et nœuds principaux -->
            {#each Data.children as category, categoryIndex}
                {@const angle = (categoryIndex * 360 / Data.children.length) - 90}
                {@const categoryRadius = 220}
                {@const categoryX = Math.cos(angle * Math.PI / 180) * categoryRadius}
                {@const categoryY = Math.sin(angle * Math.PI / 180) * categoryRadius}

                <!-- Ligne vers catégorie principale -->
                <svg class="absolute top-0 left-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    <line
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${categoryX}px)`}
                            y2={`calc(50% + ${categoryY}px)`}
                            stroke="#000000"
                            stroke-width="2"
                            stroke-dasharray="4,4"
                            class="transition-all"
                    />
                </svg>

                <!-- Nœud catégorie principale -->
                <button
                        class="absolute top-1/2 left-1/2 z-10 cursor-pointer"
                        style="transform: translate(calc(-50% + {categoryX}px), calc(-50% + {categoryY}px));"
                        on:click={() => selectSkill(category)}
                        on:mouseenter={() => hoveredSkill = category}
                        on:mouseleave={() => hoveredSkill = null}
                >
                    <div
                            class={`w-20 h-20 rounded-full bg-black shadow-xl flex items-center justify-center transform transition-all hover:scale-110 ${
            selectedSkill?.name === category.name ? 'ring-4 ring-white scale-110' : ''
        }`}
                    >
                        <span class="text-white font-semibold text-sm text-center px-2">{category.name}</span>
                    </div>
                </button>


                <!-- Compétences enfants -->
                {#each category.children as skill, skillIndex}
                    {@const childAngle = angle + (skillIndex - (category.children.length - 1) / 2) * 25}
                    {@const childRadius = 140}
                    {@const childX = categoryX + Math.cos(childAngle * Math.PI / 180) * childRadius}
                    {@const childY = categoryY + Math.sin(childAngle * Math.PI / 180) * childRadius}

                    <!-- Ligne vers compétence enfant -->
                    <svg class="absolute top-0 left-0 w-full h-full pointer-events-none" style="z-index: 2;">
                        <line
                                x1={`calc(50% + ${categoryX}px)`}
                                y1={`calc(50% + ${categoryY}px)`}
                                x2={`calc(50% + ${childX}px)`}
                                y2={`calc(50% + ${childY}px)`}
                                stroke="#000000"
                                stroke-width="2"
                                stroke-dasharray="4,4"
                                class="transition-all"
                                class:opacity-100={hoveredSkill?.name === category.name || selectedSkill?.name === category.name}
                                class:opacity-30={hoveredSkill && hoveredSkill?.name !== category.name && selectedSkill?.name !== category.name}
                        />
                    </svg>

                    <!-- Nœud compétence enfant -->
                    <button
                            class="absolute top-1/2 left-1/2 z-10 cursor-pointer"
                            style="transform: translate(calc(-50% + {childX}px), calc(-50% + {childY}px));"
                            on:click={() => selectSkill(skill)}
                            on:mouseenter={() => hoveredSkill = category}
                            on:mouseleave={() => hoveredSkill = null}
                    >
                        <div
                                class={`w-20 h-20 border border-white rounded-full bg-black shadow-lg flex items-center justify-center transform transition-all hover:scale-110 ${
            selectedSkill?.name === skill.name ? 'ring-4 ring-white scale-110' : ''
        }`}
                        >
                            <span class="text-white font-medium text-xs text-center px-2">{skill.name}</span>
                        </div>
                    </button>

                {/each}
            {/each}
        </div>

        <!-- Panneau de détails -->
        {#if selectedSkill}
            <div class="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto transform transition-all animate-fade-in">
                <div class="flex items-start gap-6">
                    <div class="w-20 h-20 rounded-2xl bg-black shadow-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {#if selectedSkill.img}
                            <img src={selectedSkill.img} alt={selectedSkill.name} class="object-contain w-full h-full" />
                        {:else}
                            <span class="text-white font-bold text-2xl">{selectedSkill.name.charAt(0)}</span>
                        {/if}
                    </div>

                    <div class="flex-1">
                        <Text type="h3"
                              size="xl"
                              weight="bold">
                            {selectedSkill.name}
                        </Text>
                        {#if selectedSkill.children}
                            <div class="mt-6 space-y-2">
                                <Text type="h4"
                                      size="sm"
                                      weight="semibold">
                                    {selectedSkill.name}
                                </Text>
                                    <Text type="h4"
                                      size="sm"
                                      color="success"
                                      weight="semibold">
                                    {Data.h4}
                                </Text>
                                <div class="flex flex-wrap gap-2">
                                    {#each selectedSkill.children as child}
                                        <button
                                                on:click={() => selectSkill(child)}
                                                class="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:shadow-lg transition-all hover:scale-105"
                                        >
                                            {child.name}
                                        </button>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
<style>
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(10px);
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