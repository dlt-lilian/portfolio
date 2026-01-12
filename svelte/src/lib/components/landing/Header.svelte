<script lang="ts">
    import {gsap} from "gsap";
    import {TextPlugin} from "gsap/TextPlugin";
    import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin";
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import {onMount} from "svelte";

    import Data from "$lib/data/Presentation.json";

    import SolarSystem from "$lib/3d/SolarSystem/SolarSystem.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Button from "$lib/components/ui/actions/Button.svelte";

    gsap.registerPlugin(TextPlugin, ScrambleTextPlugin, ScrollTrigger);

    let headerElement: HTMLElement;
    let typewriterElement: HTMLHeadingElement;

    const typewriterText = Data.name;

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

<header bind:this={headerElement} class="p-10 grid grid-cols-3 gap-4 h-screen bg-black">
    <div class="col-span-2 h-auto">
        <SolarSystem />
    </div>
    <div class="flex flex-col place-content-center space-y-5">
        <h2 bind:this={typewriterElement}
            class="text-4xl font-semibold text-white relative">
            <span class="typewriter-cursor"></span>
        </h2>

        <Text type="p" color="white">
            {Data.text}
        </Text>
        <Button link={Data.button.link}
                iconLeft={Data.button.icon}
                variant="outline">
            {Data.button.text}
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