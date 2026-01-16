<script lang="ts">
    import {gsap} from "gsap";
    import {TextPlugin} from "gsap/TextPlugin";
    import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import {onMount} from "svelte";

    import data from "$lib/data/Presentation.json";

    import SolarSystem from "$lib/3d/SolarSystem/SolarSystem.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Button from "$lib/components/ui/actions/Button.svelte";

    gsap.registerPlugin(TextPlugin, ScrambleTextPlugin, ScrollTrigger);

    let headerElement: HTMLElement;
    let typewriterElement: HTMLHeadingElement;

    const typewriterText = data.name;

    onMount(() => {
        ScrollTrigger.create({
            trigger: headerElement,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            markers: false
        });

        // Animation Typewriter
        gsap.to(typewriterElement, {
            duration: 2,
            text: typewriterText,
            ease: "none",
            delay: 0.5
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<header bind:this={headerElement}
        class="relative h-screen bg-black overflow-hidden p-10 grid grid-cols-2 grid-cols-1 gap-4
               lg:grid-cols-3">

    <!-- SolarSystem -->
    <div class="col-span-2 h-full
      absolute inset-0 z-0
      lg:relative lg:inset-auto lg:z-auto">
        <SolarSystem />
    </div>

    <!-- Texte -->
    <div class="flex flex-col space-y-5 text-center
                absolute inset-0 z-10 px-10 items-center justify-center
                lg:relative lg:z-auto lg:px-0 lg:items-start lg:justify-center lg:text-left">
        <h2 bind:this={typewriterElement}
            class="text-4xl font-semibold text-white">
            <span class="typewriter-cursor"></span>
        </h2>

        <Text type="p"
              color="white">
            {data.text}
        </Text>

        <Button
                link={data.button.link}
                iconLeft={data.button.icon}
                variant="outline"
        >
            {data.button.text}
        </Button>
    </div>


</header>


<style>
    .typewriter-cursor::after {
        content: '|';
        animation: blink 1s step-end infinite;
        margin-left: 2px;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
</style>