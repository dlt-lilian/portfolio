<script>
    import { onMount } from 'svelte';

    let container;

    onMount(() => {
        const canvas = document.getElementById("canvas");
        const rect = container.getBoundingClientRect();

        window.canvas = canvas;
        window.canvas.width = rect.width;
        window.canvas.height = rect.height;
        window.iw = rect.width;
        window.ih = rect.height;

        // Importation dynamique de votre script
        import('./script.js');

        // Gestion du redimensionnement du composant
        const resizeObserver = new ResizeObserver(() => {
            const newRect = container.getBoundingClientRect();
            canvas.width = newRect.width;
            canvas.height = newRect.height;
            window.iw = newRect.width;
            window.ih = newRect.height;
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    });
</script>

<div bind:this={container} class="container">
    <canvas id="canvas"></canvas>
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>