<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    export let themes: string[] = [
        'light',
        'dark'
    ];

    export let variant: 'dropdown' | 'radio' | 'toggle' = 'dropdown';
    export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
    export let placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

    let currentTheme = 'light';

    const sizeClasses = {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg'
    };

    const placementClasses = {
        top: 'dropdown-top',
        bottom: 'dropdown-bottom',
        left: 'dropdown-left',
        right: 'dropdown-right'
    };

    function setTheme(theme: string) {
        if (browser) {
            currentTheme = theme;
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }

    onMount(() => {
        if (browser) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme && themes.includes(savedTheme)) {
                currentTheme = savedTheme;
            } else {
                // Détecter le thème système
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                currentTheme = prefersDark ? 'dark' : 'light';
            }
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
    });

    $: buttonClasses = [
        'btn',
        sizeClasses[size]
    ].filter(Boolean).join(' ');

    $: dropdownClasses = [
        'dropdown',
        placementClasses[placement]
    ].filter(Boolean).join(' ');
</script>

{#if variant === 'dropdown'}
    <div class={dropdownClasses}>
        <div tabindex="0" role="button" class="{buttonClasses} m-1">
            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            Thème
            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
            </svg>
        </div>
        <ul class="dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow-2xl max-h-60 overflow-y-auto">
            {#each themes as theme}
                <li>
                    <input
                            type="radio"
                            name="theme-dropdown"
                            class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={theme}
                            value={theme}
                            checked={currentTheme === theme}
                            on:change={() => setTheme(theme)}
                    />
                </li>
            {/each}
        </ul>
    </div>

{:else if variant === 'radio'}
    <div class="form-control">
        <div class="label">
            <span class="label-text">Sélectionner un thème</span>
        </div>
        <div class="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {#each themes as theme}
                <label class="label cursor-pointer justify-start gap-2">
                    <input
                            type="radio"
                            name="theme-radio"
                            class="radio radio-primary radio-{size}"
                            value={theme}
                            checked={currentTheme === theme}
                            on:change={() => setTheme(theme)}
                    />
                    <span class="label-text capitalize">{theme}</span>
                </label>
            {/each}
        </div>
    </div>

{:else if variant === 'toggle'}
    <label class="swap swap-rotate">
        <input
                type="checkbox"
                class="theme-controller"
                value="dark"
                checked={currentTheme === 'dark'}
                on:change={(e) => setTheme((e.target as HTMLInputElement).checked ? 'dark' : 'light')}
        />

        <!-- sun icon -->
        <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
        </svg>

        <!-- moon icon -->
        <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
        </svg>
    </label>
{/if}