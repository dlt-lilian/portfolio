<script lang="ts">
    export let variant: 'info' | 'success' | 'warning' | 'error' = 'info';
    export let alertStyle: 'default' | 'soft' | 'outline' | 'dash' = 'default';

    const variantClasses: Record<typeof variant, string> = {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error'
    };

    const styleClasses: Record<typeof alertStyle, string> = {
        default: '',
        soft: 'alert-soft',
        outline: 'alert-outline',
        dash: 'alert-dash'
    };

    $: classes = ['alert', 'w-full', variantClasses[variant], styleClasses[alertStyle]]
        .filter(Boolean)
        .join(' ');
</script>

<div role="alert" class={classes} {...$$restProps}>
    <slot name="icon">
        {#if variant === 'info'}
            <svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        {:else if variant === 'success'}
            <svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        {:else if variant === 'warning'}
            <svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
            </svg>
        {:else if variant === 'error'}
            <svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        {/if}
    </slot>
    <div class="flex flex-col">
        <slot name="title" />
        <slot>Alert message</slot>
    </div>
    <slot name="actions" />
</div>