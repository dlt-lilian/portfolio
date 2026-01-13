<script lang="ts">
    import Header from "$lib/components/landing/Header.svelte";
    import Skilltree from "$lib/components/landing/Skilltree.svelte";
    import Contact from "$lib/components/landing/Contact.svelte";
    import Timeline from "$lib/components/landing/Timeline.svelte";
    import Projects from "$lib/components/landing/Projects.svelte";
</script>

    <Header />

<div class="relative z-10 bg-white space-y-4 pt-10 pb-10 min-h-screen lg:px-100 md:px-16">
    <p>Learning a refaire</p>
    <p>Experiences a refaire</p>
    <p>About a refaire</p>
    <Skilltree/>
    <Projects />
    <Timeline/>
    <Contact />
</div>