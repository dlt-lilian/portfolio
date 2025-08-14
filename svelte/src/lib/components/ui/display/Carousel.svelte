<script lang="ts">
    interface CarouselItem {
        id?: string | number;
        image: string;
        alt?: string;
    }

    export let items: CarouselItem[] = [];
    export let variant: 'default' | 'vertical' | 'center' | 'end' = 'default';

    const variantClasses: Record<typeof variant, string> = {
        default: 'carousel w-full',
        vertical: 'carousel carousel-vertical w-full h-96',
        center: 'carousel carousel-center w-full',
        end: 'carousel carousel-end w-full'
    };

    $: classes = variantClasses[variant];
</script>

<div class={classes}>
    {#each items as item, index (item.id ?? index)}
        <div class="carousel-item {variant === 'vertical' ? 'h-full' : 'w-full'}" id="slide{index + 1}">
            <img
                    src={item.image}
                    alt={item.alt || `Slide ${index + 1}`}
                    class={variant === 'vertical' ? 'h-full w-full object-cover' : 'w-full'}
            />
        </div>
    {/each}
</div>