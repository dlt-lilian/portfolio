<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import Icon from "$lib/components/ui/Icon.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Link from "$lib/components/ui/navigation/Link.svelte";

    interface CarouselItem {
        id?: string | number;
        image: string;
        title: string;
        alt?: string;
    }

    export let items: CarouselItem[] = [];
    export let variant: 'default' | 'vertical' | 'center' | 'end' = 'default';
    export let aspect: 'default' | 'old' | 'screen' | 'cinema' = 'default';
    export let autoScroll: boolean = true;
    export let interval: number = 3000;
    export let showArrows: boolean = true;

    const variantClasses: Record<typeof variant, string> = {
        default: 'carousel w-full',
        vertical: 'carousel carousel-vertical w-full h-96',
        center: 'carousel carousel-center w-full',
        end: 'carousel carousel-end w-full'
    };

    const aspectClasses: Record<typeof aspect, string> = {
        default: '',
        old: 'aspect-[4/3]',
        screen: 'aspect-[16/9]',
        cinema: 'aspect-[21/9]'
    }

    let currentIndex = 0;
    let intervalId: number | undefined;
    let carouselElement: HTMLElement;

    $: classes = `rounded-xl overflow-hidden
                    ${variantClasses[variant]}
                    ${aspectClasses[aspect]}`.trim();


    function scrollToSlide(index: number) {
        const slide = carouselElement?.querySelector(`#slide${index + 1}`) as HTMLElement;
        if (slide && carouselElement) {
            const scrollAmount = variant === 'vertical'
                ? slide.offsetTop
                : slide.offsetLeft;

            carouselElement.scrollTo({
                top: variant === 'vertical' ? scrollAmount : 0,
                left: variant === 'vertical' ? 0 : scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        scrollToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        scrollToSlide(currentIndex);
    }

    function startAutoScroll() {
        if (autoScroll && items.length > 1) {
            intervalId = window.setInterval(nextSlide, interval);
        }
    }

    function stopAutoScroll() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = undefined;
        }
    }

    onMount(() => {
        startAutoScroll();
    });

    onDestroy(() => {
        stopAutoScroll();
    });

    function handleMouseEnter() {
        stopAutoScroll();
    }

    function handleMouseLeave() {
        startAutoScroll();
    }

    function handlePrevClick() {
        stopAutoScroll();
        prevSlide();
        startAutoScroll();
    }

    function handleNextClick() {
        stopAutoScroll();
        nextSlide();
        startAutoScroll();
    }
</script>
<div class="relative group">
    <!-- Carousel Slides -->
    <div
            class={classes}
            bind:this={carouselElement}
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            role="region"
            aria-label="Carousel"
    >
        {#each items as item, index (item.id ?? index)}
            <div
                    class="carousel-item {variant === 'vertical' ? 'h-full' : 'w-full'}"
                    id="slide{index + 1}"
            >
                {#if item.link}
                    <Link to={item.link}>
                        <img
                                src={item.image}
                                alt={item.alt || `Slide ${index + 1}`}
                                class={variant === 'vertical'
                        ? 'h-full w-full object-cover'
                        : 'w-full h-full'}
                        />
                    </Link>
                {:else}
                    <img
                            src={item.image}
                            alt={item.alt || `Slide ${index + 1}`}
                            class={variant === 'vertical'
                    ? 'h-full w-full object-cover'
                    : 'w-full'}
                    />
                {/if}
            </div>
        {/each}
    </div>

    <!-- Overlay Text for Current Slide -->
    {#if items.length > 0}
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <Text color="white"
                  weight="semibold"
                  bgColor="primary">
                {items[currentIndex].title}
            </Text>
        </div>
    {/if}

    <!-- Navigation Arrows -->
    {#if showArrows && items.length > 1}
        <button
                on:click={handlePrevClick}
                class="btn btn-circle absolute {variant === 'vertical' ? 'top-4 left-1/2 -translate-x-1/2' : 'left-4 top-1/2 -translate-y-1/2'} opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Slide précédent"
        >
            <Icon name="lucide:chevron-left" />
        </button>

        <button
                on:click={handleNextClick}
                class="btn btn-circle absolute {variant === 'vertical' ? 'bottom-4 left-1/2 -translate-x-1/2' : 'right-4 top-1/2 -translate-y-1/2'} opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Slide suivant"
        >
            <Icon name="lucide:chevron-right" />
        </button>
    {/if}
</div>