<script lang="ts">
    export let type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' = 'p';
    export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
    export let weight: 'light' | 'normal' | 'semibold' | 'bold' | 'black' = 'normal';
    export let color: '' | 'primary' | 'success' | 'warning' | 'error' = '';

    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl',
        xl: 'text-3xl',
    }

    const weightClasses = {
        light: 'font-light',
        normal: 'font-normal',
        semibold: 'font-semibold',
        bold: 'font-bold',
        black: 'font-black',
    }

    const colorClasses = {
        '': '',
        'primary': 'text-primary',
        'success': 'text-success',
        'warning': 'text-warning',
        'error': 'text-error',
    }

    $: classes = [
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color]
    ]
        .filter(Boolean)
        .join(' ');
</script>

<svelte:element
        this={type}
        class={classes}
        {...$$restProps}
>
    <slot />
</svelte:element>