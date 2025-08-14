<script>
    import Button from "$lib/components/ui/actions/Button.svelte"
</script>

<div class="space-x-10 min-h-screen">

<!--    Header-->
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-3">
                <h1 class="text-5xl font-bold">Box Office News!</h1>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>

            </div>
            <img
                    src="https://picsum.photos/200/300"
                    alt="Coucou"
                    class="aspect-[4/3] w-full object-cover rounded-md"
            />
        </div>

<!--    Portfolio-->
    <div class="grid grid-cols-2 gap-4">

        <div class="bg-[url(https://picsum.photos/200/300)] bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4">
            coucou
            <Button>Coucou</Button>
        </div>

        <div class="bg-[url(https://picsum.photos/200/300)] bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4">
            Coucou
            <Button>Coucou</Button>
        </div>

    </div>

<!--    Compétences-->

<!--    A propos-->
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

        </div>
        <img
                src="https://picsum.photos/200/300"
                alt="Coucou"
                class="aspect-[4/3] w-full object-cover rounded-md"
        />
    </div>
<!--    Contact-->



</div>

