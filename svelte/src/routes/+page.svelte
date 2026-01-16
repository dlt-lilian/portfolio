<script lang="ts">
    import Header from "$lib/components/landing/Header.svelte";
    import Skilltree from "$lib/components/landing/Skilltree.svelte";
    import Skill from "$lib/components/landing/Skill.svelte";
    import Contact from "$lib/components/landing/Contact.svelte";
    import Timeline from "$lib/components/landing/Timeline.svelte";
    import Projects from "$lib/components/landing/Projects.svelte";
    import About from "$lib/components/landing/About.svelte";
</script>

<svelte:head>
    <title>Accueil</title>
    <meta name="accueil"
          content="Développeur web JavaScript junior" />
</svelte:head>

    <Header />

<div class="relative z-10 bg-white space-y-4 pt-10 pb-10 min-h-screen lg:px-100 md:px-16 px-5">
    <About />

    <p>Learning a refaire</p>
    <p>Experiences a refaire</p>
    <p>About a refaire</p>

    <div class="hidden md:block" >
        <Skilltree />
    </div>
    <div class="lg:hidden md:hidden block" >
        <Skill />
    </div>

    <Projects />
    <Timeline />
    <Contact />
</div>