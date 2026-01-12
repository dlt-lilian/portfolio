import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
// scene.background = new THREE.TextureLoader().load('bg.jpg');

const camera = new THREE.PerspectiveCamera(70, iw / ih, 0.1, 1000);

// Chargement des modèles 3d
const loader = new GLTFLoader();
const gltf1 = await loader.loadAsync('planet/planet.glb');
const gltf2 = await loader.loadAsync('planet/cloud.glb');
const gltf3 = await loader.loadAsync('planet/moon.glb');
const gltf4 = await loader.loadAsync('planet/rocket.glb');
const gltf5 = await loader.loadAsync('planet/rocket_trail.glb');
const gltf6 = await loader.loadAsync('planet/satellite.glb');


// Chargement des textures
const texture1 = new THREE.TextureLoader().load('planet/planet.png');
const texture3 = new THREE.TextureLoader().load('planet/moon.png');
const texture4 = new THREE.TextureLoader().load('planet/rocket.png');
const texture5 = new THREE.TextureLoader().load('planet/rocket_trail.png');


const material1 = new THREE.MeshPhongMaterial({ map: texture1 });
const material2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
});
const material3 = new THREE.MeshPhongMaterial({ map: texture3 });
const material4 = new THREE.MeshPhongMaterial({ map: texture4 });
const material5 = new THREE.MeshPhongMaterial({ map: texture5 });
const material6 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide
});
// Appliquer material au modèle
gltf1.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material1;
    }
});

gltf2.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material2;
    }
});

gltf3.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material3;
    }
});

gltf4.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material4;
    }
});

gltf5.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material5;
    }
});

gltf6.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material6;
    }
});

const planetMesh = gltf1.scene;
const cloudMesh = gltf2.scene;
const moonMesh = gltf3.scene;
const rocketMesh = gltf4.scene;
const rocketTrailMesh = gltf5.scene;
const satelliteMesh = gltf6.scene;

// Resize et position des mesh
cloudMesh.scale.set(0.85, 0.85, 0.85);
moonMesh.scale.set(0.01, 0.01, 0.01)

const moonOrbit = new THREE.Group();
moonMesh.position.set(1, 0, 0);
moonOrbit.add(moonMesh);

const rocketOrbit = new THREE.Group();
rocketMesh.position.set(0.4, 0.4, 0.4);
rocketMesh.scale.set(0.02, 0.02, 0.02);
rocketOrbit.add(rocketMesh);

const rocketTrailOrbit = new THREE.Group();
rocketTrailMesh.position.set(0.4, 0.4, 0.4);
rocketTrailMesh.scale.set(0.02, 0.02, 0.02);
rocketTrailOrbit.add(rocketTrailMesh);

const satelliteOrbit = new THREE.Group();
satelliteMesh.scale.set(0.02, 0.02, 0.02);
satelliteMesh.position.set(0.4, 0.4, 0.7);
satelliteMesh.rotation.set(0, 1, 0);
satelliteOrbit.add(satelliteMesh);

// Lumières
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffb217, 2);
directionalLight.position.set(1, 1, 1.5);

// Ajouter tous les meshes à la scène
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(planetMesh);
scene.add(cloudMesh);
scene.add(moonOrbit);
scene.add(rocketOrbit);
scene.add(rocketTrailOrbit);
scene.add(satelliteOrbit);


camera.position.set(0, 1, 1.5);

const renderer = new THREE.WebGLRenderer({ canvas });
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.target.set(0, 0, 0);
controls.update();

canvas.addEventListener('dragstart', (e) => e.preventDefault());
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.style.userSelect = 'none';
canvas.style.webkitUserSelect = 'none';

loop();

function loop() {
    requestAnimationFrame(loop);

    // Rotation de la planète
    planetMesh.rotation.y -= 0.001;

    // Rotation des nuages (un peu plus rapide pour l'effet)
    cloudMesh.rotation.y -= 0.0015;

    // ✅ Rotation de la lune autour de la planète
    moonOrbit.rotation.y += 0.005; // Vitesse d'orbite
    moonOrbit.rotation.x += 0.001;

    // ✅ Rotation de la lune sur elle-même (optionnel)
    moonMesh.rotation.y += 0.002;

    // Meme rotation que la planète
    rocketOrbit.rotation.y -= 0.001;
    rocketTrailOrbit.rotation.y -= 0.001;

    satelliteOrbit.rotation.y -= 0.005;

    controls.update();
    renderer.render(scene, camera);
}