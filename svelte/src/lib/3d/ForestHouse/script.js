import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import background from "three/src/renderers/common/Background.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Bleu ciel

const camera = new THREE.PerspectiveCamera(70, iw / ih, 0.1, 1000);

// Chargement du modèle GLTF
const loader = new GLTFLoader();
const gltf = await loader.loadAsync('forest_house.glb');

const texture = new THREE.TextureLoader().load('main_diffuse.png');
const material = new THREE.MeshPhongMaterial({ map: texture });

// Appliquer le matériau au modèle chargé
gltf.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material;
    }
});

const mesh = gltf.scene;

const light = new THREE.PointLight(0xffffff, 500);

scene.add(light);
scene.add(mesh);
scene.add(background)

camera.position.set(0, 10, 16)
camera.rotation.x = -0.5;

light.position.set(0, 1.5, 20)

const renderer = new THREE.WebGLRenderer({ canvas });

loop();

function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y -= 0.001;
    renderer.render(scene, camera);
}