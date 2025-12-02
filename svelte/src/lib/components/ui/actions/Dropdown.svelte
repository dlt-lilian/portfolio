<script>

    import Button from "$lib/components/ui/actions/Button.svelte";

    /** @type {'start' | 'center' | 'end'} */
    export let align = 'start';

    /** @type {'top' | 'bottom' | 'left' | 'right'} */
    export let position = 'bottom';

    /** @type {'xs' | 'sm' | 'md' | 'lg'} */
    export let size = 'md';

    export let hover = false;
    export let open = false;

    /** @type {Array<{id?: string, label: string, href?: string, onClick?: () => void, disabled?: boolean}>} */
    export let items = [];

    // Classes pour les positions
    const positionClasses = {
        top: 'dropdown-top',
        bottom: 'dropdown-bottom',
        left: 'dropdown-left',
        right: 'dropdown-right'
    };

    // Classes pour l'alignement
    const alignClasses = {
        start: 'dropdown-start',
        center: 'dropdown-center',
        end: 'dropdown-end'
    };

    // Classes pour les tailles
    const sizeClasses = {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg'
    };

    $: classes = [
        'dropdown',
        positionClasses[position],
        alignClasses[align],
        hover ? 'dropdown-hover' : '',
        open ? 'dropdown-open' : ''
    ]
        .filter(Boolean)
        .join(' ');

    $: buttonClasses = ['btn', sizeClasses[size]].filter(Boolean).join(' ');
</script>

<div class={classes}>
    <div tabindex="0" role="button" class={buttonClasses} {...$$restProps}>
        <slot name="trigger">
            <span>Dropdown</span>
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
                ></path>
            </svg>
        </slot>
    </div>
    <ul class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        {#each items as item, index (item.id || item.label || index)}
            <li>
                {#if item.href}
                    <a href={item.href} class:disabled={item.disabled}>
                        {item.label}
                    </a>
                {:else}
                    <Button on:click={item.onClick}
                            disabled={item.disabled}
                    >
                        {item.label}
                    </Button>
                {/if}
            </li>
        {/each}
        <slot name="content"></slot>
    </ul>
</div>