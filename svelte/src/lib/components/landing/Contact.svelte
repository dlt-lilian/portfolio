<script lang="ts">
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Text from "$lib/components/ui/Text.svelte";
    import Fieldset from "$lib/components/ui/input/Fieldset.svelte";
    import Input from "$lib/components/ui/input/Input.svelte";
    import Textarea from "$lib/components/ui/input/Textarea.svelte";
    import Icon from "$lib/components/ui/Icon.svelte";

    // --- Données ---
    import Data from "$lib/data/Contact.json" with { type: "json" };

    const contact = Data.contact;
    const form = Data.form;
    const tsuccess = Data.toast.success;
    const terror = Data.toast.error;

    const fields = Object.entries(form).filter(
        ([key, value]) => Array.isArray(value)
    );

    let success = false;
    let loading = false;
    let error = false;

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        loading = true;
        success = false;
        error = false;

        const formElement = event.currentTarget as HTMLFormElement;
        const formData = new FormData(formElement);

        try {
            const response = await fetch(
                "https://formsubmit.co/dulotlilian@gmail.com",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (!response.ok) throw new Error("Erreur FormSubmit");

            success = true;
            formElement.reset();
        } catch (e) {
            error = true;
        } finally {
            loading = false;
        }
    }

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

    <form
            class="space-y-4"
            on:submit={handleSubmit}
    >
        <!-- Options FormSubmit -->
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="Nouveau message - Contact" />

        {#each fields as [key, [label, placeholder]]}
            <Fieldset legend={label}>
                {#if key === "message"}
                    <Textarea name={key} placeholder={placeholder} required />
                {:else}
                    <Input
                            name={key}
                            placeholder={placeholder}
                            type={key === "email" ? "email" : "text"}
                            required={key !== "company"}
                    />
                {/if}
            </Fieldset>
        {/each}

        <Button width="full" type="submit" disabled={loading}>
            {#if loading}
                <span class="loading loading-spinner loading-md"></span>
            {:else}
                {form.button.text}
            {/if}
        </Button>

    </form>
</div>

{#if success}
    <div class="toast toast-bottom toast-end z-50">
        <div class="alert alert-success flex space-x-2 items-center justify-center">
            <Text iconLeft={tsuccess.icon}>
                {tsuccess.text}
            </Text>
        </div>
    </div>
{/if}

{#if error}
    <div class="toast toast-bottom toast-end z-50">
        <div class="alert alert-error flex">
            <Text iconLeft={terror.icon}>
                {terror.text}
            </Text>
        </div>
    </div>
{/if}

