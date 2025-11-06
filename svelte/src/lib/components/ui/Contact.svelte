<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Fieldset from "$lib/components/ui/input/Fieldset.svelte";
    import Input from "$lib/components/ui/input/Input.svelte";
    import Textarea from "$lib/components/ui/input/Textarea.svelte";
    import Data from "$lib/data/landing.json" with { type: "json" };

</script>

<div class="grid grid-cols-2 gap-4">
    <div class="space-y-5">
        <Text type="h2"
              size="lg">
            {Data.contact.title}
        </Text>

        <img src={Data.about.image}
             alt="À propos"
             class="aspect-[4/3] w-full object-cover rounded-xl"
        />
        <Text type="p">
            {Data.text}
        </Text>
    </div>

    <form class="grid grid-cols-1 space-y-4">
        <div class="grid grid-cols-2 gap-4">
            <Fieldset legend="Nom">
                <Input placeholder="Coucou"
                       required />
            </Fieldset>

            <Fieldset legend="Prénom">
                <Input placeholder="Coucou"
                       required />
            </Fieldset>
        </div>

        <Fieldset legend="Adresse Email">
            <Input placeholder="Coucou"
                   type="email"
                   required />
        </Fieldset>

        <Fieldset legend="Société">
            <Input placeholder="Coucou" />
        </Fieldset>

        <Fieldset legend="Objet">
            <Input placeholder="Coucou"
                   required />
        </Fieldset>

        <Fieldset legend="Message">
                <Textarea placeholder="Votre message"
                          required />
        </Fieldset>
        <Button iconLeft="lucide:info"
                variant="link"
                link="/cgu">
            <Text>
                En soumettant ce formulaire, j'accepte les conditions ...
            </Text>
        </Button>

        <Button width="full"
                iconLeft="lucide:info"/>
    </form>
</div>