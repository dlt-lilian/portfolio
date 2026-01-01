<script>
    /** @type {'rotate' | 'flip' | 'indeterminate'} */
    export let type = 'rotate';

    /** @type {boolean} */
    export let active = false;

    /** @type {boolean} */
    export let disabled = false;

    $: swapClasses = [
        'swap',
        type === 'rotate' ? 'swap-rotate' : '',
        type === 'flip' ? 'swap-flip' : '',
        type === 'indeterminate' ? 'swap-indeterminate' : '',
        disabled ? 'swap-disabled' : ''
    ]
        .filter(Boolean)
        .join(' ');

    function handleToggle() {
        if (disabled) return;
        active = !active;
    }

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handleChange() {
        if (disabled) return;
        dispatch('change', { active });
    }
</script>

<label class={swapClasses}>
    <input type="checkbox" bind:checked={active} {disabled} on:change={handleChange} />
    <div class="swap-on">
        <slot name="on">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                        d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L12 14.8l-4.9 4.9-1.4-1.4L12 12 5.7 5.7l1.4-1.4L12 9.2l4.9-4.9z"
                />
            </svg>
        </slot>
    </div>
    <div class="swap-off">
        <slot name="off">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
        </slot>
    </div>
</label>