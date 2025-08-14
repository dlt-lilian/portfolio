<script lang="ts">
    export let value: string = '';
    export let placeholder: string = '';
    export let disabled: boolean = false;
    export let rows: number = 4;
    export let variant: 'default' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' = 'default';
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

    const variantClasses: Record<typeof variant, string> = {
        default: '',
        ghost: 'textarea-ghost',
        primary: 'textarea-primary',
        secondary: 'textarea-secondary',
        accent: 'textarea-accent',
        neutral: 'textarea-neutral',
        info: 'textarea-info',
        success: 'textarea-success',
        warning: 'textarea-warning',
        error: 'textarea-error'
    };

    const sizeClasses: Record<typeof size, string> = {
        xs: 'textarea-xs',
        sm: 'textarea-sm',
        md: 'textarea-md',
        lg: 'textarea-lg',
        xl: 'textarea-xl'
    };

    $: classes = [
        'textarea',
        variantClasses[variant],
        sizeClasses[size]
    ]
        .filter(Boolean)
        .join(' ');
</script>

<textarea
        bind:value
        {placeholder}
        {disabled}
        {rows}
        class={classes}
        on:input
        on:change
        on:focus
        on:blur
        {...$$restProps}
></textarea>