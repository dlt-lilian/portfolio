<script lang="ts">
    interface AccordionItem {
        title: string;
        content: string;
    }

    export let items: AccordionItem[] = [];
    export let variant: 'outline' | 'bg' = 'outline';
    export let name: string = 'accordion';

    const variantClasses: Record<'outline' | 'bg', string> = {
        outline: 'border-base-300 border hover:bg-base-200 transition-all duration-200 ease-in-out',
        bg: 'bg-base-200 hover:bg-base-300 transition-all duration-200 ease-in-out'
    };

    $: classes = ['collapse collapse-arrow join-item', variantClasses[variant]]
        .filter(Boolean)
        .join(' ');
</script>

<div class="join join-vertical bg-base-100">
    {#each items as item, index (index)}
        <div class={classes}>
            <input
                    type="radio"
                    name={name}
            />
            <div class="collapse-title font-semibold">{item.title}</div>
            <div class="collapse-content text-sm">{item.content}</div>
        </div>
    {/each}
</div>