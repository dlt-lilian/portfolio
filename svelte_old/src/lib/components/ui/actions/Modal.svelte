<script lang="ts">
    import Button from '$lib/components/ui/actions/Button.svelte';
    let modal: HTMLDialogElement;

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
    export let iconLeft: string | null = null;
    export let iconRight: string | null = null;
    export let width: 'full' | 'col' | 'max' = 'max';
    export let outline: boolean = false;
    export let wide: boolean = false;
    export let disabled: boolean = false;
    export let position: 'top' | 'middle' | 'bottom' = 'middle';

    const positionClasses: Record<typeof position, string> = {
        top: 'modal-top',
        middle: 'modal-middle',
        bottom: 'modal-bottom'
    };

    $: modalClasses = [
        'modal',
        positionClasses[position]
    ].filter(Boolean).join(' ');

    function openModal() {
        modal.showModal();
    }

    function closeModal() {
        modal.close();
    }
</script>

<Button
        {variant}
        {size}
        {iconLeft}
        {iconRight}
        {width}
        {outline}
        {wide}
        {disabled}
        on:click={openModal}
>
    <slot name="trigger">Open Modal</slot>
</Button>

<dialog bind:this={modal} class={modalClasses}>
    <div class="modal-box">
        <form method="dialog" class="flex justify-end">
            <Button variant="ghost" size="xs" class="w-max" on:click={closeModal}>✕</Button>
        </form>
        <slot />
    </div>
    <form method="dialog" class="modal-backdrop">
        <Button>close</Button>
    </form>
</dialog>