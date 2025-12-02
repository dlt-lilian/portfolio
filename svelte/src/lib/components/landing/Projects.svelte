<script>
    import Text from "$lib/components/ui/Text.svelte";

    // --- Données ---
    import Data from "$lib/data/Projects.json" with { type: "json" };
</script>

<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
    {Data.title}
</Text>