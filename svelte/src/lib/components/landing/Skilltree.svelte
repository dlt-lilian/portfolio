<script lang="ts">
    import { onMount } from 'svelte';
    import Text from "$lib/components/ui/Text.svelte"
    import Link from "$lib/components/ui/navigation/Link.svelte"
    import Button from "$lib/components/ui/actions/Button.svelte";

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
    let containerHeight = 0;
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
                containerHeight = treeContainer.offsetHeight;
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

    // Calcul du centre en pixels
    $: centerX = containerWidth / 2;
    $: centerY = containerHeight / 2;
</script>

<div class="w-full h-full flex flex-col space-y-4">
    <!-- En-tête -->
    <div class="text-center space-y-2">
        <Text type="h2"
              size="xl"
              weight="semibold">
            {data.h2}
        </Text>
        <Text type="p"
              size="sm">
            {data.p}
        </Text>
    </div>

    <!-- Conteneur principal avec scroll si nécessaire -->
    <div class="flex flex-col-reverse space-y-4
                lg:grid lg:gap-4 lg:grid-cols-3">
        <!-- Arbre circulaire -->
        <div class="col-span-2">
            <div bind:this={treeContainer}
                 class="relative w-full aspect-square">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <!-- Centre - Nœud racine -->
                    <div class="w-30 h-30 rounded-full bg-black shadow-2xl flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
                        <Text type="span"
                              color="white"
                              weight="semibold">{data.name}</Text>
                    </div>
                </div>

                <!-- SVG pour toutes les lignes -->
                <svg class="absolute top-0 left-0 w-full h-full pointer-events-none" style="z-index: 1;">
                    {#each data.children as category, categoryIndex}
                        {@const angle = (categoryIndex * 360 / data.children.length) - 90}
                        {@const categoryX = centerX + Math.cos(angle * Math.PI / 180) * categoryRadius}
                        {@const categoryY = centerY + Math.sin(angle * Math.PI / 180) * categoryRadius}

                        <!-- Ligne vers catégorie principale -->
                        <line
                                x1={centerX}
                                y1={centerY}
                                x2={categoryX}
                                y2={categoryY}
                                stroke="#000000"
                                stroke-width="2"
                                stroke-dasharray="4,4"
                                class="transition-all"
                                class:opacity-100={hoveredSkill?.name === category.name || selectedSkill?.name === category.name}
                                class:opacity-30={hoveredSkill && hoveredSkill?.name !== category.name && selectedSkill?.name !== category.name} />

                        <!-- Lignes vers compétences enfants -->
                        {#if category.children}
                            {#each category.children as skill, skillIndex}
                                {@const childAngle = angle + (skillIndex - (category.children.length - 1) / 2) * 35}
                                {@const childX = categoryX + Math.cos(childAngle * Math.PI / 180) * childRadius}
                                {@const childY = categoryY + Math.sin(childAngle * Math.PI / 180) * childRadius}

                                <line
                                        x1={categoryX}
                                        y1={categoryY}
                                        x2={childX}
                                        y2={childY}
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-dasharray="4,4"
                                        class="transition-all"
                                        class:opacity-100={hoveredSkill?.name === category.name || selectedSkill?.name === category.name}
                                        class:opacity-30={hoveredSkill && hoveredSkill?.name !== category.name && selectedSkill?.name !== category.name}
                                />
                            {/each}
                        {/if}
                    {/each}
                </svg>

                <!-- Nœuds -->
                {#each data.children as category, categoryIndex}
                    {@const angle = (categoryIndex * 360 / data.children.length) - 90}
                    {@const categoryX = Math.cos(angle * Math.PI / 180) * categoryRadius}
                    {@const categoryY = Math.sin(angle * Math.PI / 180) * categoryRadius}

                    <!-- Nœud catégorie principale -->
                    <Button
                            class="absolute top-1/2 left-1/2 z-10 cursor-pointer"
                            style="transform: translate(calc(-50% + {categoryX}px), calc(-50% + {categoryY}px));"
                            on:click={() => selectSkill(category)}
                            on:mouseenter={() => hoveredSkill = category}
                            on:mouseleave={() => hoveredSkill = null} >
                        <div
                                class={`w-20 h-20 rounded-full bg-black shadow-xl flex items-center justify-center transform transition-all hover:scale-110
                                ${selectedSkill?.name === category.name ? 'ring-2 md:ring-4 ring-white scale-110' : ''}`}>
                            <Text type="span"
                                  color="white"
                                  size="sm"
                                  weight="semibold">
                                {category.name}
                            </Text>
                        </div>
                    </Button>

                    <!-- Compétences enfants -->
                    {#if category.children}
                        {#each category.children as skill, skillIndex}
                            {@const childAngle = angle + (skillIndex - (category.children.length - 1) / 2) * 35}
                            {@const childX = categoryX + Math.cos(childAngle * Math.PI / 180) * childRadius}
                            {@const childY = categoryY + Math.sin(childAngle * Math.PI / 180) * childRadius}

                            <!-- Nœud compétence enfant -->
                            <Button
                                    class="absolute top-1/2 left-1/2 z-10 cursor-pointer"
                                    style="transform: translate(calc(-50% + {childX}px), calc(-50% + {childY}px));"
                                    on:click={() => selectSkill(skill)}
                                    on:mouseenter={() => hoveredSkill = category}
                                    on:mouseleave={() => hoveredSkill = null}>
                                <div class={`w-20 h-20 border border-white rounded-full bg-black shadow-lg flex items-center justify-center transform transition-all hover:scale-110
                                            ${selectedSkill?.name === skill.name ? 'ring-1 md:ring-4 ring-white scale-110' : ''}`}>
                                    <Text type="span"
                                          color="white"
                                          size="sm"
                                          weight="semibold">
                                        {skill.name}
                                    </Text>
                                </div>
                            </Button>
                        {/each}
                    {/if}
                {/each}
            </div>
        </div>

        <!-- Panneau de détails -->
        <div class="w-full h-max">
            {#if selectedSkill}
                <div class="bg-white w-full rounded-xl shadow-xl p-4 md:p-6 lg:p-8 h-full animate-fade-in">
                    <div class="flex items-start gap-3 md:gap-4 lg:gap-6">
                        <div class="w-20 h-20 rounded-xl bg-black shadow-xl flex items-center justify-center">
                            {#if selectedSkill.img}
                                <img
                                        src={selectedSkill.img}
                                        alt={selectedSkill.name}
                                        class="object-contain w-full h-full p-2"
                                />
                            {:else}
                                <Text type="span"
                                      color="white"
                                      size="xl"
                                      weight="semibold">
                                    {selectedSkill.name.charAt(0)}
                                </Text>
                            {/if}
                        </div>

                        <div class="flex-1 min-w-0">
                            <Text type="h3"
                                  size="lg"
                                  weight="bold">
                                {selectedSkill.name}
                            </Text>
                            <Text type="p">
                                {selectedSkill.description}
                            </Text>
                            <Link to={selectedSkill.link}>
                                {selectedSkill.link}
                            </Link>

                            {#if selectedSkill.children}
                                <div class="space-y-2">
                                    <Text type="h4"
                                          size="sm"
                                          weight="semibold"
                                          bgColor="success">
                                        {data.h4}
                                    </Text>
                                    <div class="flex flex-wrap gap-1.5 md:gap-2">
                                        {#each selectedSkill.children as child}
                                            <Button
                                                    on:click={() => selectSkill(child)}
                                            >
                                                {child.name}
                                            </Button>
                                        {/each}
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            {:else}
                <div class="bg-white rounded-xl shadow-xl p-4 h-full flex items-center justify-center">
                    <div class="text-center text-gray-400 flex gap-2">
                        <Text type="p"
                              size="sm"
                              iconLeft={data.icon}>
                            {data.p}
                        </Text>
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