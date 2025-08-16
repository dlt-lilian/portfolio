<script>
    import Button from "$lib/components/ui/actions/Button.svelte";
    import Data from "$lib/data/Navigation.json";
    import Themecontroller from "$lib/components/ui/actions/Themecontroller.svelte";
</script>

<!--Probleme avec darkMode-->
<div class="navbar grid grid-cols-3 gap-4 shadow-md px-50 sticky top-0 bg-white">
    <div class="col-start-2 flex justify-center">
        {#each Data.navbar as item}
            <Button
                    link={item.url}
                    iconLeft={item.icon}
                    variant="ghost"
            >
                {item.label}
            </Button>
        {/each}
    </div>
    <div class="flex justify-end">
        <Themecontroller variant="toggle" />
    </div>

</div>