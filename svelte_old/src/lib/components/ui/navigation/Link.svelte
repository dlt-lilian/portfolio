<script lang="ts">
    export let to: string;
    export let color: 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'error' = 'primary';

    const colorClasses = {
        'primary': 'link-primary',
        'secondary': 'link-secondary',
        'accent': 'link-accent',
        'info': 'link-info',
        'warning': 'link-warning',
        'error': 'link-error',
    }

    $: classes = [
        'link',
        colorClasses[color]
    ]
        .filter(Boolean)
        .join(' ');
</script>

<a class={classes}
   href={to}>
    <slot/>
</a>