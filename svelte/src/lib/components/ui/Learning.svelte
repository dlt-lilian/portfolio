<script>
    import Data from "$lib/data/learning.json" with { type: "json" };

    const grouped = {};

    for (const item of Data.content) {
        const category = item[0];
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(item.slice(1));
    }

    const categories = Object.entries(grouped);
</script>

<h2 class="text-2xl font-bold mb-4 text-center">{Data.title}</h2>

<!-- Pour chaque catégorie -->
{#each categories as [category, items]}
    <div class="mb-10">
        <h3 class="text-xl font-semibold mb-4">{category}</h3>

        <div class="grid grid-cols-4 gap-4">
            {#each items as column}
                <div>
                    <div class="flex flex-col bg-gray-100 p-2 gap-5">
                        <p class="font-semibold">{column[0]}</p>
                        <p>{column[1]}</p>
                        <p>{column[2]}</p>
                        <div class="flex gap-5">
                            <p>{column[3]}</p>
                            <p>{column[4]}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/each}
