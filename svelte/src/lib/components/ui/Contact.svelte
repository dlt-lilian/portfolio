<script lang="ts">
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Fieldset from "$lib/components/ui/input/Fieldset.svelte";
    import Input from "$lib/components/ui/input/Input.svelte";
    import Textarea from "$lib/components/ui/input/Textarea.svelte";
    import Data from "$lib/data/Contact.json" with { type: "json" };

    const contact = Data.contact;
    const form = Data.form;

    const fields = Object.entries(form).filter(
        ([key, value]) => Array.isArray(value)
    );
</script>

<Text
        type="h2"
        size="xl"
        weight="semibold"
        align="center">
    {contact.title}
</Text>

<div class="grid grid-cols-2 gap-4">
    <div class="space-y-5">
        <img src={contact.img}
             alt="À propos"
             class="w-full h-full object-cover rounded-xl" />
    </div>

    <form class="space-y-4">
        {#each fields as [key, [label, placeholder]]}
            <Fieldset legend={label}>
                {#if key === "message"}
                    <Textarea placeholder={placeholder}
                              required />
                {:else}
                    <Input placeholder={placeholder}
                           type={key === "email" ? "email" : "text"}
                           required={key !== "company"} />
                {/if}
            </Fieldset>
        {/each}

        <Button iconLeft={form.link.icon}
                variant="link"
                link={form.link.link}>
            {form.link.text}
        </Button>

        <Button width="full"
                iconLeft={form.button.icon}>
            {form.button.text}
        </Button>
    </form>
</div>
