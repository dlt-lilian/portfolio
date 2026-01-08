<script>
    import Highlight, { LineNumbers } from "svelte-highlight";
    import typescript from "svelte-highlight/languages/typescript";
    import dracula from "svelte-highlight/styles/dracula";

    // Props
    export let code = `const lilian = {
    age: 20,
    status: "Junior Developer",
    passion: ["Coding", "Learning", "Music", "Guitar", "Surf"],
    nextGoal: "Work With you"
};`;
    export let language = typescript;
    export let title = "about-me";
    export let showLineNumbers = true;
</script>

<svelte:head>
    {@html dracula}
</svelte:head>

<div class=" rounded-xl bg-[#282a36] shadow-2xl overflow-hidden border border-gray-700/50 aspect-[4/3]">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-3 bg-[#21222c] border-b border-gray-700/50">
        <div class="flex items-center gap-2">
            <!-- macOS buttons -->
            <button class="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors" aria-label="Close"></button>
            <button class="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors" aria-label="Minimize"></button>
            <button class="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors" aria-label="Maximize"></button>

            <span class="ml-3 text-gray-400 text-sm font-mono">{title}</span>
        </div>
    </div>

    <!-- Code content -->
    <div class="text-sm">
        <Highlight {language} {code} let:highlighted>
            {#if showLineNumbers}
                <LineNumbers {highlighted} hideBorder />
            {/if}
        </Highlight>
    </div>
</div>
