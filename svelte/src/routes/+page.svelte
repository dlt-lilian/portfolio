<script lang="ts">
    import Header from "$lib/components/landing/Header.svelte";
    import Projects from "$lib/components/landing/Projects.svelte";
    import Skilltree from "$lib/components/landing/Skilltree.svelte";
    import Learning from "$lib/components/landing/Learning.svelte";
    import Experiences from "$lib/components/landing/Experiences.svelte";
    import Contact from "$lib/components/landing/Contact.svelte";
    import Editor from "$lib/components/landing/Editor.svelte";
    import Timeline from "$lib/components/landing/Timeline.svelte";
    import Planet from "$lib/3d/Planet/Planet.svelte";
</script>

<div class="space-y-4">

    <div class="grid grid-cols-2 gap-4">
    <Planet />
    <Editor />
    </div>

    <Header />


    <!--json a completer-->
    <Skilltree/>

    <Projects />

<!--    &lt;!&ndash;Learning en cours&ndash;&gt;-->
<!--    <Learning />-->

    <Timeline/>
<!--    <Experiences />-->

    <Contact />

</div>
