<script lang="ts">
    import Icon from '@iconify/svelte';
    export let name: string;
    export let size: 'xs' | 'sm' | 'md' | 'lg' = 'xs';
    export let color:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'info'
        | 'success'
        | 'warning'
        | 'error' = 'default';
    export let rotate: boolean = false;

    const variantClasses: Record<typeof color, string> = {
        default: '',
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
    };

    const sizeClasses: Record<typeof size, string> = {
        xs: 'w-5 h-5',
        sm: 'w-10 h-10',
        md: 'w-15 h-15',
        lg: 'w-20 h-20'
    };

    $: classes = [
        variantClasses[color],
        sizeClasses[size],
        'transition-transform duration-300',
        rotate ? 'rotate-180' : ''
    ]
        .filter(Boolean)
        .join(' ');
</script>

<Icon icon={name}
      class={classes} />