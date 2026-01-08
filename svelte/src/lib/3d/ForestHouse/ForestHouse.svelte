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
        import('./script.js').then(() => {
            // Forcer un redimensionnement initial
            if (window.renderer) {
                window.renderer.setSize(rect.width, rect.height);
            }
        });

        // Gestion du redimensionnement du composant
        const resizeObserver = new ResizeObserver(() => {
            const newRect = container.getBoundingClientRect();
            canvas.width = newRect.width;
            canvas.height = newRect.height;
            window.iw = newRect.width;
            window.ih = newRect.height;

            // Mettre à jour le renderer si disponible
            if (window.renderer) {
                window.renderer.setSize(newRect.width, newRect.height);
            }
            if (window.camera) {
                window.camera.aspect = newRect.width / newRect.height;
                window.camera.updateProjectionMatrix();
            }
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    });
</script>

<div bind:this={container} class="w-full aspect-[4/3] rounded-xl overflow-hidden">
    <canvas id="canvas"></canvas>
</div>

<style>
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>