<script>
    import Header from "$lib/components/ui/Header.svelte";
    import Projects from "$lib/components/ui/Projects.svelte";
    import Skilltree from "$lib/components/ui/Skilltree.svelte";
    import About from "$lib/components/ui/About.svelte";
    import Experiences from "$lib/components/ui/Experiences.svelte";
    import Contact from "$lib/components/ui/Contact.svelte";
</script>

<div class="space-y-20">

    <Header />

    <Projects />

    <Skilltree/>

    <About />

    <!-- Formation et Expérience -->
    <Experiences />

    <!-- Contact -->

    <Contact />

</div>