<script lang="ts">
    export let color: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' = 'error' ;

    const colorClasses = {
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        accent: 'badge-accent',
        neutral: 'badge-neutral',
        info: 'badge-info',
        success: 'badge-success',
        warning: 'badge-warning',
        error: 'badge-error'

    }

    $: classes = [
        'badge badge-soft',
        colorClasses[color]
    ]
        .filter(Boolean)
        .join(' ');
</script>


<div class={classes}>
    <slot/>
</div>