<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let container;
    let scene, camera, renderer, cube;

    onMount(() => {
        // Création de la scène
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a2e);

        // Création de la caméra
        camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Création du renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Création du cube
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00d9ff,
            shininess: 100,
            specular: 0x222222
        });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Ajout de lumières
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Animation
        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        animate();

        // Gestion du redimensionnement
        function handleResize() {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
        window.addEventListener('resize', handleResize);

        // Nettoyage
        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    });
</script>

<div bind:this={container} class="canvas-container"></div>

<style>
    .canvas-container {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>