import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, iw / ih, 0.1, 1000);

// Chargement du modèle GLTF
const loader = new GLTFLoader();
const gltf = await loader.loadAsync('mario.glb');

const texture = new THREE.TextureLoader().load('mario.png');
const material = new THREE.MeshPhongMaterial({ map: texture });

// Appliquer le matériau au modèle chargé
gltf.scene.traverse((child) => {
    if (child.isMesh) {
        child.material = material;
    }
});

const mesh = gltf.scene;

const light = new THREE.PointLight(0xffffff, 10);

scene.add(light);
scene.add(mesh);

camera.position.set(0, 1.5, 3)
light.position.set(0, 4, 4)

const renderer = new THREE.WebGLRenderer({ canvas });

loop();

function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}