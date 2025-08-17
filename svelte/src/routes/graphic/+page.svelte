<script lang="ts">
    import Data from "$lib/data/Graphic.json"
</script>

<div class="space-y-20">
    <p>Graphique</p>
    <div class="grid grid-cols-4 gap-4">
        {#each Data.content as imageUrl}
            <img alt="Coucou" src={imageUrl}>
        {/each}
    </div>
</div>
