<script lang="ts">
    export let placement: 'left' | 'right' = 'right';

    const placementClasses: Record<string, string> = {
        left: '',
        right: 'drawer-end'
    };

    //Button
    export let variant: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' = 'primary';
    export let size: 'xs' | 'md' | 'lg' = 'md';
    export let width:  'full' | 'col' | 'max' = 'max';
    export let outline = false;
    export let wide = false;
    export let disabled = false;

    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        info: 'btn-info',
        success: 'btn-success',
        warning: 'btn-warning',
        error: 'btn-error',
        ghost: 'btn-ghost'
    };

    const sizeClasses = {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg'
    };

    const widthClasses = {
        full: 'w-full',
        col: 'col-span-full',
        max: 'w-max'
    };

    $: classes = [
        'drawer',
        placementClasses[placement] || ''
    ].filter(Boolean).join(' ');

    $: buttonClasses = [
        'btn',
        variantClasses[variant],
        sizeClasses[size],
        widthClasses[width],
        outline ? 'btn-outline' : '',
        wide ? 'btn-wide' : '',
        disabled ? 'btn-disabled' : ''
    ].filter(Boolean).join(' ');
</script>

<div class={classes}>
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
        <label for="my-drawer" class={buttonClasses}>Open drawer</label>
    </div>
    <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <slot />
        </div>
    </div>
</div>