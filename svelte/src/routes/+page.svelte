<script>
    import Header from "$lib/components/ui/Header.svelte";
    import Projects from "$lib/components/ui/Projects.svelte";
    import Skilltree from "$lib/components/ui/Skilltree.svelte";
    import About from "$lib/components/ui/About.svelte";
    import Learning from "$lib/components/ui/Learning.svelte";
    import Experiences from "$lib/components/ui/experiences.svelte";
    import Contact from "$lib/components/ui/Contact.svelte";
</script>

<div class="space-y-4">

    <Header />

    <Projects />

    <!--json a completer-->
    <Skilltree/>

    <!--A refaire ou enlever-->
    <!--<About />-->

    <!--Learning a faire-->
    <Learning />

    <!--json a completer-->
    <Experiences />

    <Contact />

</div>