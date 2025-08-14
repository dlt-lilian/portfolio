<script lang="ts">
    export let bg = false
    export let outline = false

    export let legend


    const bgClasses: Record<string, string> = {
        'false': '',
        'true': 'bg-base-200 border-base-300 rounded-box border p-4',
    }

    const outlineClasses: Record<string, string> = {
        'false': '',
        'true': 'border border-base-300 rounded-box p-4',
    }

    $: classes = [
        'fieldset',
        bgClasses[String(bg)],
        outlineClasses[String(outline)]
    ].filter(Boolean).join(' ');
</script>

<fieldset class={classes}>
    <legend class="fieldset-legend">{legend}</legend>

    <slot/>

</fieldset>