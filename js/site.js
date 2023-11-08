import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, calculateAspectRatio(), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

setSize();

renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '50%';
renderer.domElement.style.left = '50%';
renderer.domElement.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load(
    'assets/scene.gltf', 
    function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.rotation.x += 0.005; 
        animate();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

camera.position.z = 60;

// not showing up yet...
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(2, 0, 0);
sphere.userData = { isClickable: true };
scene.add(sphere);

window.addEventListener('click', onClick, false);

window.addEventListener('resize', onWindowResize, false);

const light = new THREE.HemisphereLight(0xffffff, 0x444444);
light.position.set(1, 1, 1);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    const gltfModel = scene.children.find(child => child.isGroup);

    if (gltfModel) {
        gltfModel.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
}

// Click event handling
function onClick(event) {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    for (let intersect of intersects) {
        if (intersect.object.userData.isClickable) {
            console.log('Red sphere was clicked!');
            break;
        }
    }
}

function onWindowResize() {
    camera.aspect = calculateAspectRatio();
    camera.updateProjectionMatrix();
    setSize();
}

function setSize() {
    const maxWidth = window.innerWidth * 0.8; 
    const maxHeight = window.innerHeight * 0.8; 
    const aspectRatio = calculateAspectRatio();
    let newWidth, newHeight;

    if (maxWidth < maxHeight * aspectRatio) {
        newWidth = maxWidth;
        newHeight = maxWidth / aspectRatio;
    } else {
        newWidth = maxHeight * aspectRatio;
        newHeight = maxHeight;
    }

    renderer.setSize(newWidth, newHeight);
}

function calculateAspectRatio() {
    const aspectRatio = 16 / 9; 
    return aspectRatio;
}
