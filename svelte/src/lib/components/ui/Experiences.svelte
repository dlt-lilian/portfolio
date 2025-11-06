<script>
    import Data from "$lib/data/Experiences.json" with { type: "json" };

    import Text from "$lib/components/ui/Text.svelte";
    import Badge from "$lib/components/ui/actions/Badge.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    <Text type="h3"
          size="lg"
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
            <div class="space-y-2 p-3 bg-gray-50 rounded-xl">
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
                    <Badge color="success" >{
                        formation.status}
                    </Badge>
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
            <div class="space-y-1 p-3 bg-gray-50 rounded-xl">
                <Text type="p"
                      size="sm">
                    {formation.plateforme}
                </Text>
                <Text type="span"
                      size="sm">
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
            <div class="space-y-2 p-3 bg-gray-50 rounded-xl">
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
            <div class="space-y-2 p-3 bg-gray-50 rounded-xl">
                <Text type="p"
                      size="sm">
                    {exp.poste}
                </Text>
                <Text type="p"
                      size="sm">
                    {exp.entreprise}
                </Text>
                <div class="flex items-center gap-2">
                    <Text type="span"
                          size="sm">
                        {exp.periode} • {exp.duree}
                    </Text>
                    {#if exp.status === 'en cours'}
                        <Badge color="info" >
                            {exp.status}
                        </Badge>
                    {/if}
                    {#if exp.status === 'termine'}
                        <Badge color="success" >{exp.status}</Badge>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>