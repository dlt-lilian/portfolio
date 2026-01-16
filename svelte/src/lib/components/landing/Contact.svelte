<script lang="ts">
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Fieldset from "$lib/components/ui/input/Fieldset.svelte";
    import Input from "$lib/components/ui/input/Input.svelte";
    import Textarea from "$lib/components/ui/input/Textarea.svelte";

    // --- Données ---
    import data from "$lib/data/Contact.json" with { type: "json" };

    const contact = data.contact;
    const form = data.form;

    const fields = Object.entries(form).filter(
        ([key, value]) => Array.isArray(value)
    );
</script>


<Text type="h2"
      size="xl"
      weight="semibold"
      align="center">
        {contact.title}
</Text>

<div id="contact" class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 scroll-mt-32">
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
                link={form.link.link} width="full" align="left">
            {form.link.text}
        </Button>

        <Button width="full"
                iconLeft={form.button.icon}>
            {form.button.text}
        </Button>
    </form>
</div>
