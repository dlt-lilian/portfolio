<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Badge from "$lib/components/ui/actions/Badge.svelte";
    import Fieldset from "$lib/components/ui/input/Fieldset.svelte";
    import Input from "$lib/components/ui/input/Input.svelte";
    import Textarea from "$lib/components/ui/input/Textarea.svelte";

    import Test from "$lib/data/test.json" with { type:"json" };
    import Data from "$lib/data/Landing.json" with { type: "json" };
</script>

<div class="space-y-20">

    <!-- Header -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <Text type="h1" size="xl" weight="semibold">
                {Data.header.title[0]}
            </Text>

            <Text type="h2" size="lg" weight="semibold">
                {Data.header.title[1]}
            </Text>

            <Text type="p" class="mt-5">
                {Data.header.text}
            </Text>
        </div>
        <img
                src={Data.header.image}
                alt="Header"
                class="aspect-[4/3] w-full object-cover rounded-md"
        />
    </div>
    <!-- Portfolio -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({Data.portfolio.graphic.image})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {Data.portfolio.graphic.title}
            </Text>
            <Button link={Data.portfolio.graphic.link}>
                {Data.portfolio.graphic.label}
            </Button>
        </div>

        <div class="bg-cover aspect-[4/3] rounded-md flex justify-end items-center flex-col p-4 space-y-4"
             style="background-image: url({Data.portfolio.code.image})">
            <Text type="span"
                  weight="semibold"
                  color="white">
                {Data.portfolio.code.title}
            </Text>
            <Button link={Data.portfolio.code.link}>
                {Data.portfolio.code.label}
            </Button>
        </div>
    </div>

    <!-- Compétences -->
    <div>
        <Text type="h2">
            {Data.competences.title}
        </Text>
        <Text type="p">
            {Test.indev}
        </Text>
    </div>

    <!-- À propos -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <img
                src={Data.about.image}
                alt="À propos"
                class="aspect-[4/3] w-full object-cover rounded-md"
        />

        <div class="md:col-span-3">
            <Text type="h2">
                {Data.about.title}
            </Text>
            <Text type="p">
                {Data.about.text}
            </Text>

            <Button link={Data.about.cv.link}>
                {Data.about.cv.label}
            </Button>
        </div>
    </div>

    <!-- Formation et Expérience -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <Text type="h3"
              weight="semibold"
              class="col-span-4">
            {Data.about.formation.title}
        </Text>
        <!-- Formation Scolaire -->
        <div class="space-y-4">


            <Text type="h4">
                {Data.about.formation.scolaire.title}
            </Text>

            {#each Data.about.formation.scolaire.items as formation}
                <div class="space-y-2 p-3 bg-gray-50 rounded-md">
                    <Text type="p"
                          size="sm">
                        {formation.diplome}
                    </Text>
                    <Text type="p"
                          size="sm">
                        {formation.etablissement}
                    </Text>
                    <div class="flex items-center gap-2">
                        <Text type="span"
                              size="sm">
                            {formation.periode}
                        </Text>
                        <Badge color="success" >{formation.status}</Badge>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Formation Personnelle -->
        <div class="space-y-4">
            <Text type="h4">
                {Data.about.formation.personnelle.title}
            </Text>

            {#each Data.about.formation.personnelle.items as formation}
                <div class="space-y-1 p-3 bg-gray-50 rounded-md">
                    <Text type="p" size="sm">
                        {formation.plateforme}
                    </Text>
                    <Text type="span" size="sm">
                        Auto-formation
                    </Text>
                </div>
            {/each}
        </div>
        <!-- Stages -->
        <div class="space-y-4">
            <Text type="h4">
                Stages
            </Text>

            {#each Data.about.experience.stages as stage}
                <div class="space-y-2 p-3 bg-gray-50 rounded-md">
                    <Text type="p"
                          size="sm">
                        {stage.poste}
                    </Text>
                    <Text type="p"
                          size="sm">
                        {stage.entreprise}
                    </Text>
                    <Text type="span"
                          size="sm">
                        {stage.periode} • {stage.duree}
                    </Text>
                </div>
            {/each}
        </div>

        <!-- Alternance -->
        <div class="space-y-4">
            <Text type="h4">
                Alternance
            </Text>

            {#each Data.about.experience.alternance as exp}
                <div class="space-y-2 p-3 bg-gray-50 rounded-md">
                    <Text type="p" size="sm">
                        {exp.poste}
                    </Text>
                    <Text type="p" size="sm">
                        {exp.entreprise}
                    </Text>
                    <div class="flex items-center gap-2">
                        <Text type="span" size="sm">
                            {exp.periode} • {exp.duree}
                        </Text>
                        {#if exp.status === 'en cours'}
                            <Badge color="info" >{exp.status}</Badge>
                        {/if}
                        {#if exp.status === 'termine'}
                            <Badge color="success" >{exp.status}</Badge>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Contact -->
    <div class="grid grid-cols-2 gap-4">
        <Text type="h2"
              class="col-span-full">
            {Data.contact.title}
        </Text>
        <Text type="p">
            Text a ajouter
        </Text>

        <form class="grid grid-cols-1 space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <Fieldset legend="Nom">
                    <Input placeholder="Coucou" required />
                </Fieldset>

                <Fieldset legend="Prénom">
                    <Input placeholder="Coucou" required />
                 </Fieldset>
            </div>

            <Fieldset legend="Adresse Email">
                <Input placeholder="Coucou" type="email" required />
            </Fieldset>

            <Fieldset legend="Société">
                <Input placeholder="Coucou" />
            </Fieldset>

            <Fieldset legend="Objet">
                <Input placeholder="Coucou" required />
             </Fieldset>

            <Fieldset legend="Message">
                <Textarea placeholder="Votre message" required />
            </Fieldset>
            <Button iconLeft="lucide:info" variant="link"
                    link="/cgu">
                <Text>
                    En soumettant ce formulaire, j'accepte les conditions ...
                </Text>
            </Button>

            <Button width="full" iconLeft="lucide:info"/>
        </form>
    </div>

</div>