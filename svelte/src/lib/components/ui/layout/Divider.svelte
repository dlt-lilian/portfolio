<script lang="ts">
    export let color:
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'info'
        | 'success'
        | 'warning'
        | 'error' = 'primary';

    const variantClasses: Record<typeof color, string> = {
        primary: 'divider-primary',
        secondary: 'divider-secondary',
        accent: 'divider-accent',
        info: 'divider-info',
        success: 'divider-success',
        warning: 'divider-warning',
        error: 'divider-error',
    };

    $: classes = [
        'divider',
        variantClasses[color],
    ]
        .filter(Boolean)
        .join(' ');
</script>

<div class={classes}>
    <slot/>
</div>