import * as THREE from 'three'; //only works thru vite... npx vite
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; 

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); 
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(ambientLight);

const loader = new GLTFLoader();
loader.load(
    'assets/scene.gltf', 
    function (gltf) {
        console.log('Model loaded:', gltf); 
        scene.add(gltf.scene);
        animate();
    },
    undefined,
    function (error) {
        console.error('An error happened while loading the model:', error);
    }
);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Only required if controls.enableDamping or controls.autoRotate are set to true
    renderer.render(scene, camera);
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

animate(); 
