<script lang="ts">
    export let value: number | undefined = undefined;
    export let max: number = 100;
    export let variant: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' = 'default';
    export let size: 'sm' | 'md' | 'lg' = 'md';

    const variantClasses: Record<typeof variant, string> = {
        default: '',
        primary: 'progress-primary',
        secondary: 'progress-secondary',
        accent: 'progress-accent',
        neutral: 'progress-neutral',
        info: 'progress-info',
        success: 'progress-success',
        warning: 'progress-warning',
        error: 'progress-error'
    };

    const sizeClasses: Record<typeof size, string> = {
        sm: 'w-32',
        md: 'w-56',
        lg: 'w-80'
    };

    $: classes = [
        'progress',
        variantClasses[variant],
        sizeClasses[size]
    ].filter(Boolean).join(' ');

    $: isIndeterminate = value === undefined;
</script>

{#if isIndeterminate}
    <progress class={classes} {...$$restProps}></progress>
{:else}
    <progress class={classes} {value} {max} {...$$restProps}></progress>
{/if}