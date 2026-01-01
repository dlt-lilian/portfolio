<script lang="ts">
    export let variant: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' = 'default';
    export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
    export let disabled: boolean = false;
    export let checked: boolean = false;
    export let label: string | null = null;
    export let legend: string | null = null;

    const variantClasses: Record<typeof variant, string> = {
        default: '',
        primary: 'checkbox-primary',
        secondary: 'checkbox-secondary',
        accent: 'checkbox-accent',
        neutral: 'checkbox-neutral',
        info: 'checkbox-info',
        success: 'checkbox-success',
        warning: 'checkbox-warning',
        error: 'checkbox-error'
    };

    const sizeClasses: Record<typeof size, string> = {
        xs: 'checkbox-xs',
        sm: 'checkbox-sm',
        md: 'checkbox-md',
        lg: 'checkbox-lg'
    };

    $: classes = [
        'checkbox',
        variantClasses[variant],
        sizeClasses[size],
        disabled ? 'checkbox-disabled' : ''
    ].filter(Boolean).join(' ');

</script>

{#if label}
    <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        {#if legend}
            <legend class="fieldset-legend">{legend}</legend>
        {/if}
        <label class="label cursor-pointer">
            <input
                    type="checkbox"
                    bind:checked
                    {disabled}
                    class={classes}
                    on:change
                    {...$$restProps}
            />
            <span class="label-text">{label}</span>
            <slot />
        </label>
    </fieldset>
{:else}
    <input
            type="checkbox"
            bind:checked
            {disabled}
            class={classes}
            on:change
            {...$$restProps}
    />
    <slot />
{/if}