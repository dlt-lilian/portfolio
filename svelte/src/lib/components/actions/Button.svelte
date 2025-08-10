<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Icon from '@iconify/svelte';

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
    export let width: 'full' | 'col' | 'max' = 'max';
    export let iconLeft: string | null = null;
    export let iconRight: string | null = null;
    export let iconSize: number = 16;
    export let link: string | null = null;
    export let outline: boolean = false;
    export let wide: boolean = false;
    export let disabled: boolean = false;

    const dispatch = createEventDispatcher();

    const variantClasses: Record<typeof variant, string> = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        info: 'btn-info',
        success: 'btn-success',
        warning: 'btn-warning',
        error: 'btn-error',
        ghost: 'btn-ghost'
    };

    const sizeClasses: Record<typeof size, string> = {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg'
    };

    const widthClasses: Record<typeof width, string> = {
        full: 'w-full',
        col: 'col-span-full',
        max: 'w-max'
    };

    $: classes = [
        'btn',
        variantClasses[variant],
        sizeClasses[size],
        widthClasses[width],
        outline ? 'btn-outline' : '',
        wide ? 'btn-wide' : '',
        disabled ? 'btn-disabled' : ''
    ]
        .filter(Boolean)
        .join(' ');

    function handleClick(event: MouseEvent) {
        if (!disabled) {
            dispatch('click', event);
        }
    }
</script>

{#if link}
    <a href={link}>
        <button class={classes} {disabled} on:click={handleClick} type="button" {...$$restProps}>
            {#if iconLeft}
                <Icon icon={iconLeft} width={iconSize} height={iconSize} />
            {/if}
            <slot>Button</slot>
            {#if iconRight}
                <Icon icon={iconRight} width={iconSize} height={iconSize} />
            {/if}
        </button>
    </a>
{:else}
    <button class={classes} {disabled} on:click={handleClick} type="button" {...$$restProps}>
        {#if iconLeft}
            <Icon icon={iconLeft} width={iconSize} height={iconSize} />
        {/if}
        <slot>Button</slot>
        {#if iconRight}
            <Icon icon={iconRight} width={iconSize} height={iconSize} />
        {/if}
    </button>
{/if}