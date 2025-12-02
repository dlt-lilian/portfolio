<script>
    import Header from "$lib/components/landing/Header.svelte";
    import Projects from "$lib/components/landing/Projects.svelte";
    import Skilltree from "$lib/components/landing/Skilltree.svelte";
    import Learning from "$lib/components/landing/Learning.svelte";
    import Experiences from "$lib/components/landing/Experiences.svelte";
    import Contact from "$lib/components/landing/Contact.svelte";
</script>

<div class="space-y-4">

    <Header />

    <Projects />

    <!--json a completer-->
    <Skilltree/>

    <!--Learning en cours-->
    <Learning />

    <!--json a completer-->
    <Experiences />

    <Contact />

</div>