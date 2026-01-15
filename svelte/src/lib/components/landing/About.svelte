<script>
    import data from "$lib/data/About.json" with { type: "json" };
    import Text from "$lib/components/ui/Text.svelte";
    import Editor from "$lib/components/landing/Editor.svelte";
</script>

<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
    {data.title}
</Text>

<article class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">

    <Editor/>

    <div class="space-y-4">
        <Text type="h4" size="lg" weight="semibold">{data.secondtitle}</Text>
        {#each data.text as item}
            <Text type="p">{item}</Text>
        {/each}
    </div>
</article>
