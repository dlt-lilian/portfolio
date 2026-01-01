<script lang="ts">
    export let min: number = 0;
    export let max: number;
    export let value: number;

    export let variant:
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'info'
        | 'success'
        | 'warning'
        | 'error'
        | 'ghost' = 'primary';
    export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

    const variantClasses: Record<typeof variant, string> = {
        primary: 'range-primary',
        secondary: 'range-secondary',
        accent: 'range-accent',
        info: 'range-info',
        success: 'range-success',
        warning: 'range-warning',
        error: 'range-error',
        ghost: 'range-ghost'
    };

    const sizeClasses: Record<typeof size, string> = {
        xs: 'range-xs',
        sm: 'range-sm',
        md: 'range-md',
        lg: 'range-lg'
    };

    $: classes = ['range', variantClasses[variant], sizeClasses[size]]
        .filter(Boolean)
        .join(' ');
</script>

<input
        type="range"
        {min}
        {max}
        bind:value
        class={classes}
        on:input
        on:change
        {...$$restProps}
/>