<script lang="ts">
    export let variant: 'base' | 'bordered' | 'compact' | 'side' = 'base';

    const variantClasses: Record<typeof variant, string> = {
        base: 'card bg-base-100 shadow-xl',
        bordered: 'card bg-base-100 shadow-xl border border-base-300',
        compact: 'card card-compact bg-base-100 shadow-xl',
        side: 'card card-side bg-base-100 shadow-xl'
    };

    $: classes = variantClasses[variant];
</script>

<div class={classes}>
    <slot />
</div>