<script>
    let contributions = [];

    onMount(async () => {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/<dlt-lilian>");
        const data = await res.json();
        contributions = data.contributions;
    });
</script>

<div class="grid grid-cols-53 gap-1">
    {#each contributions as week}
        <div class="flex flex-col gap-1">
            {#each week as day}
                <div
                        class="w-3 h-3 rounded-sm"
                        style="background-color: {day.color}"
                        title="{day.date} — {day.count} contributions"
                />
            {/each}
        </div>
    {/each}
</div>
