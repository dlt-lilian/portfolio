<script lang="ts">
    export let type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' = 'text';
    export let value: string = '';
    export let placeholder: string = '';
    export let disabled: boolean = false;
    export let variant: 'default' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' = 'default';
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

    const variantClasses: Record<typeof variant, string> = {
        default: 'input-bordered',
        ghost: 'input-ghost',
        primary: 'input-primary',
        secondary: 'input-secondary',
        accent: 'input-accent',
        neutral: 'input-neutral',
        info: 'input-info',
        success: 'input-success',
        warning: 'input-warning',
        error: 'input-error'
    };

    const sizeClasses: Record<typeof size, string> = {
        xs: 'input-xs',
        sm: 'input-sm',
        md: 'input-md',
        lg: 'input-lg',
        xl: 'input-xl'
    };

    $: classes = [
        'input w-full',
        variantClasses[variant],
        sizeClasses[size]
    ]
        .filter(Boolean)
        .join(' ');
</script>

<input
        {type}
        bind:value
        {placeholder}
        {disabled}
        class={classes}
        on:input
        on:change
        on:focus
        on:blur
        {...$$restProps}
/>