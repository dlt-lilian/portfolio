<script lang="ts">
    import { onMount } from 'svelte';
    import Text from "$lib/components/ui/Text.svelte"
    import Link from "$lib/components/ui/navigation/Link.svelte"

    // --- Typage ---
    type Skill = {
        name: string;
        img?: string;
        description?: string;
        link?: string;
        children?: Skill[];
    };

    type SkillsData = {
        name: string;
        h2: string;
        h4: string;
        p: string;
        children: Skill[];
    };

    // --- Données ---
    import Data from "$lib/data/Skilltree.json" with {type: "json"};
    const data: SkillsData = Data;

    // --- Variables d'état ---
    let selectedSkill: Skill | null = null;
    let hoveredSkill: Skill | null = null;
    let containerWidth = 0;
    let treeContainer: HTMLDivElement;

    // --- Fonctions ---
    function selectSkill(skill: Skill): void {
        selectedSkill = selectedSkill?.name === skill.name ? null : skill;
    }

    // Calculer la taille de l'arbre en fonction du conteneur
    onMount(() => {
        const updateSize = () => {
            if (treeContainer) {
                containerWidth = treeContainer.offsetWidth;
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    });

    // Calcul responsive des rayons
    $: treeSize = Math.min(containerWidth * 0.95, 900);
    $: categoryRadius = treeSize * 0.24;
    $: childRadius = treeSize * 0.15;
</script>

<div class="w-full h-full flex flex-col">
    <!-- En-tête -->
    <div class="text-center mb-4 md:mb-6 lg:mb-8 px-4">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {data.h2}
        </h2>
        <p class="text-sm md:text-base text-gray-600">{data.p}</p>
    </div>

    <!-- Conteneur principal avec scroll si nécessaire -->
    <div class="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 overflow-auto px-4">
        <!-- Arbre circulaire -->
        <div class="flex-1 flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-0">
            <div bind:this={treeContainer} class="relative w-full max-w-[900px] aspect-square">
                <div class="absolute inset-0">
                    <!-- Centre - Nœud racine -->
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black shadow-2xl flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
                            <span class="text-white font-bold text-sm sm:text-base md:text-lg">{data.name}</span>
                        </div>
                    </div>

                    <!-- Branches et nœuds principaux -->
                    {#each data.children as category, categoryIndex}
                        {@const angle = (categoryIndex * 360 / data.children.length) - 90}
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
                                    stroke-width="3"
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
                                    class={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-black shadow-xl flex items-center justify-center transform transition-all hover:scale-110 ${
                                    selectedSkill?.name === category.name ? 'ring-2 md:ring-4 ring-white scale-110' : ''
                                }`}
                            >
                                <span class="text-white font-semibold text-[10px] sm:text-xs md:text-sm text-center px-1 md:px-2">{category.name}</span>
                            </div>
                        </button>

                        <!-- Compétences enfants -->
                        {#if category.children}
                            {#each category.children as skill, skillIndex}
                                {@const childAngle = angle + (skillIndex - (category.children.length - 1) / 2) * 25}
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
                                            class={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-white rounded-full bg-black shadow-lg flex items-center justify-center transform transition-all hover:scale-110 ${
                                            selectedSkill?.name === skill.name ? 'ring-2 md:ring-4 ring-white scale-110' : ''
                                        }`}
                                    >
                                        <span class="text-white font-medium text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-center px-1">{skill.name}</span>
                                    </div>
                                </button>
                            {/each}
                        {/if}
                    {/each}
                </div>
            </div>
        </div>

        <!-- Panneau de détails -->
        <div class="w-full lg:w-80 xl:w-96 flex-shrink-0">
            {#if selectedSkill}
                <div class="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 h-full animate-fade-in">
                    <div class="flex items-start gap-3 md:gap-4 lg:gap-6">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-black shadow-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {#if selectedSkill.img}
                                <img
                                        src={selectedSkill.img}
                                        alt={selectedSkill.name}
                                        class="object-contain w-full h-full p-1 sm:p-1.5 md:p-2"
                                />
                            {:else}
                                <span class="text-white font-bold text-lg sm:text-xl md:text-2xl">{selectedSkill.name.charAt(0)}</span>
                            {/if}
                        </div>

                        <div class="flex-1 min-w-0">
                            <Text type="h3"
                                  size="lg"
                                  weight="bold">
                                {selectedSkill.name}
                            </Text>
                            <Text type="p">{selectedSkill.description}</Text>
                            <Link to="https://google.com">google.com</Link>

                            {#if selectedSkill.children}
                                <div class="mt-3 sm:mt-4 md:mt-6 space-y-2">
                                    <h4 class="text-xs sm:text-sm font-semibold text-green-600">
                                        {data.h4}
                                    </h4>
                                    <div class="flex flex-wrap gap-1.5 md:gap-2">
                                        {#each selectedSkill.children as child}
                                            <button
                                                    on:click={() => selectSkill(child)}
                                                    class="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md md:rounded-lg bg-black text-white text-xs sm:text-sm font-medium hover:shadow-lg transition-all hover:scale-105"
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
            {:else}
                <div class="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 h-full flex items-center justify-center">
                    <div class="text-center text-gray-400">
                        <svg class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p class="text-xs sm:text-sm">Sélectionnez une compétence</p>
                    </div>
                </div>
            {/if}
        </div>
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