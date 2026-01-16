import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
// scene.background = new THREE.TextureLoader().load('bg.jpg');

const camera = new THREE.PerspectiveCamera(70, iw / ih, 0.1, 1000);

// Chargement des modèles 3d
const loader = new GLTFLoader();
const planet = await loader.loadAsync('planet/planet.glb');
const cloud = await loader.loadAsync('planet/cloud.glb');
const moon = await loader.loadAsync('planet/planet.glb');
const rocket = await loader.loadAsync('planet/rocket.glb');
const rocketTrail = await loader.loadAsync('planet/rocket_trail.glb');
const spoutnik = await loader.loadAsync('planet/spoutnik.glb');
const astronaut = await loader.loadAsync('planet/astronaut.glb');


// Chargement des textures
const planet_texture = new THREE.TextureLoader().load('planet/planet.png');
const moon_texture = new THREE.TextureLoader().load('planet/moon.png');
const rocket_texture = new THREE.TextureLoader().load('planet/rocket.png');
const rocketTrail_texture = new THREE.TextureLoader().load('planet/rocket_trail.png');
const astronaut_texture = new THREE.TextureLoader().load('planet/astronaut.png');

// Creation des materiaux a partir des textures ou de couleurs
const planet_material = new THREE.MeshPhongMaterial({ map: planet_texture });
const cloude_material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
});
const moon_material = new THREE.MeshPhongMaterial({ map: moon_texture });
const rocket_material = new THREE.MeshPhongMaterial({ map: rocket_texture });
const rocketTrail_material = new THREE.MeshPhongMaterial({ map: rocketTrail_texture });
const spoutnik_material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide
});
const astronaut_material = new THREE.MeshPhongMaterial({ map: astronaut_texture });

// Appliquer material au modèle
planet.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = planet_material;
    }
});

cloud.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = cloude_material;
    }
});

moon.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = moon_material;
    }
});

rocket.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = rocket_material;
    }
});

rocketTrail.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = rocketTrail_material;
    }
});

spoutnik.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = spoutnik_material;
    }
});

astronaut.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = astronaut_material;
    }
});

// variables pour definir les mesh
const planetMesh = planet.scene;
const cloudMesh = cloud.scene;
const moonMesh = moon.scene;
const rocketMesh = rocket.scene;
const rocketTrailMesh = rocketTrail.scene;
const spoutnikMesh = spoutnik.scene;
const astronautMesh = astronaut.scene;

// Resize et position des mesh
planetMesh.scale.set(0.068, 0.068, 0.068)
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

const spoutnikOrbit = new THREE.Group();
spoutnikMesh.scale.set(0.02, 0.02, 0.02);
spoutnikMesh.position.set(0.4, 0.4, 0.7);
spoutnikMesh.rotation.set(0, 1, 0);
spoutnikOrbit.add(spoutnikMesh);

const astronautOrbit = new THREE.Group();
astronautMesh.scale.set(0.02, 0.02, 0.02);
astronautMesh.position.set(0.3, 0.6, 1);
astronautMesh.rotation.set(0, 0, 0);
astronautOrbit.add(astronautMesh);

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
scene.add(spoutnikOrbit);
scene.add(astronautOrbit);

// Position de la camera
camera.position.set(0, 1, 1.5);

// Rendu
const renderer = new THREE.WebGLRenderer({ canvas });

// Permet d'interargir avec la souris
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.target.set(0, 0, 0);
controls.update();

canvas.addEventListener('dragstart', (e) => e.preventDefault());
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.style.userSelect = 'none';
canvas.style.webkitUserSelect = 'none';

loop();

// Animations
function loop() {
    requestAnimationFrame(loop);

    // Rotation de la planète
    planetMesh.rotation.y -= 0.001;

    // Rotation des nuages
    cloudMesh.rotation.y -= 0.0015;

    // Rotation de la lune autour de la planète
    moonOrbit.rotation.y += 0.005;
    moonOrbit.rotation.x += 0.001;

    // Rotation de la lune sur elle-même
    moonMesh.rotation.y += 0.002;

    // Rotation de la fusee
    rocketOrbit.rotation.y -= 0.001;
    rocketTrailOrbit.rotation.y -= 0.001;

    // Rotation de Spoutnik
    spoutnikOrbit.rotation.y -= 0.005;

    astronautOrbit.rotation.y -= 0.0005;

    controls.update();
    renderer.render(scene, camera);
}