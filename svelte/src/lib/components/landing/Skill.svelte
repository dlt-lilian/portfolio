<script lang="ts">
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";

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

    import Data from "$lib/data/Skilltree.json" with {type: "json"};
    const data: SkillsData = Data;

    // --- Variables ---
    let selectedSkill: Skill | null = null;

    // --- Fonctions ---
    function selectSkill(skill: Skill): void {
        selectedSkill = selectedSkill?.name === skill.name ? null : skill;
    }
</script>

<!-- En-tête -->
<div class="text-center space-y-2">
    <Text type="h2" size="xl" weight="semibold">{data.h2}</Text>
    <Text type="p" size="sm">{data.p}</Text>
</div>

<div class="grid grid-cols-2 gap-4">
    {#each data.children as category}
        <!-- Colonne catégorie -->
        <div
                class="flex flex-col gap-3"
                class:col-span-2={category.children.some(s => s.name === selectedSkill?.name)}
        >
            <!-- Nom catégorie -->
            <div class="bg-black text-white px-2 py-1 rounded-full text-center">
                <Text type="h4" weight="semibold">{category.name}</Text>
            </div>

            <!-- Grille enfants -->
            <div class="grid grid-cols-2 gap-4">
                {#each category.children as skill}
                    <div class="flex flex-col gap-1"
                         class:col-span-2={selectedSkill?.name === skill.name}>
                        <Button on:click={() => selectSkill(skill)} variant="">
                            {skill.name}
                        </Button>
                        {#if selectedSkill?.name === skill.name}
                            <Text type="p" size="sm" class="mt-1 opacity-80">
                                {skill.description}
                            </Text>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>


