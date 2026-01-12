import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, iw / ih);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const texture = new THREE.TextureLoader().load('diamond.jpg');
const material = new THREE.MeshPhongMaterial({ map: texture });
const mesh = new THREE.Mesh(geometry, material);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);

scene.add(ambientLight);
scene.add(directionalLight);
scene.add(mesh);

camera.position.set(0, 1, 1.5);

const renderer = new THREE.WebGLRenderer({ canvas });
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

controls.target.set(0, 0, 0); // Regarde vers le centre
controls.update(); // ← Important pour appliquer le target

canvas.addEventListener('dragstart', (e) => e.preventDefault());
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.style.userSelect = 'none';
canvas.style.webkitUserSelect = 'none';

loop();

function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y -= 0.01;
    controls.update();
    renderer.render(scene, camera);
}