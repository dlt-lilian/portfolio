<script lang="ts">
    export let name: string;
    export let value: string | number;
    export let checked: boolean = false;
    export let disabled: boolean = false;
    export let variant: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error' = 'default';
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

    const variantClasses: Record<typeof variant, string> = {
        default: '',
        neutral: 'radio-neutral',
        primary: 'radio-primary',
        secondary: 'radio-secondary',
        accent: 'radio-accent',
        success: 'radio-success',
        warning: 'radio-warning',
        info: 'radio-info',
        error: 'radio-error'
    };

    const sizeClasses: Record<typeof size, string> = {
        xs: 'radio-xs',
        sm: 'radio-sm',
        md: 'radio-md',
        lg: 'radio-lg',
        xl: 'radio-xl'
    };

    $: classes = [
        'radio',
        variantClasses[variant],
        sizeClasses[size]
    ]
        .filter(Boolean)
        .join(' ');
</script>

<input
        type="radio"
        {name}
        {value}
        {checked}
        {disabled}
        class={classes}
        on:change
        {...$$restProps}
/>