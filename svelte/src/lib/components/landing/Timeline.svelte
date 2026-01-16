<script>
    import data from "$lib/data/Experiences.json";
    import Text from "$lib/components/ui/Text.svelte";

    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent,
        TimelineOppositeContent
    } from 'svelte-vertical-timeline';
</script>

<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
    {data.title}
</Text>

<Timeline position="right" direction="column">
    {#each data.postes as items}
        <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
                <Text type="p">{items.periode}</Text>
                <Text type="p">{items.duree}</Text>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Text type="p">{items.poste}</Text>
                <Text type="p">{items.entreprise}</Text>
                <Text type="p">{items.type}</Text>
                <Text type="p">{items.status}</Text>
            </TimelineContent>
        </TimelineItem>
    {/each}
</Timeline>