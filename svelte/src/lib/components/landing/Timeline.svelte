<script>
    import Data from "$lib/data/Experiences.json";
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
    {Data.title}
</Text>

<Timeline position="right" direction="column">
    {#each Data.postes as items}
        <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
                <p>{items.periode}</p>
                <p>{items.duree}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <p>{items.poste}</p>
                <p>{items.entreprise}</p>
                <p>{items.type}</p>
                <p>{items.status}</p>
            </TimelineContent>
        </TimelineItem>
    {/each}
</Timeline>