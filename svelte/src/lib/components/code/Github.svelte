<script>
    import { onMount } from 'svelte';
    import Link from "$lib/components/ui/navigation/Link.svelte";

    let profile = null;
    let repos = [];
    const username = "dlt-lilian";

    onMount(async () => {
        // Récupérer le profil
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        profile = await profileRes.json();

        // Récupérer les repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        repos = await reposRes.json();
    });
</script>

{#if profile}
    <a target="_blank" href="https://github.com/dlt-lilian"
       class="w-max bg-primary text-white p-4 rounded-xl shadow-xl flex justify-between items-center
                transform transition-transform duration-100 ease-out
                hover:scale-101">
        <div class="flex items-center gap-4">
            <img src={profile.avatar_url} alt={profile.name} class="w-20 h-20 rounded-full" />
            <div>
                <h2 class="text-2xl font-bold">{profile.name}</h2>
                <p class="text-gray-400">@{profile.login}</p>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
                <div class="text-2xl font-bold">{profile.public_repos}</div>
                <div class="text-sm text-gray-400">Repos</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold">{profile.followers}</div>
                <div class="text-sm text-gray-400">Followers</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold">{profile.following}</div>
                <div class="text-sm text-gray-400">Following</div>
            </div>
        </div>
    </a>
{/if}