import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const init = () => {
    const canvas = document.getElementById("canvas");
    const scene = new THREE.Scene();

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    scene.add(camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.render(scene, camera);

    console.log("Sucessful scene initializing")

    return {scene, canvas, sizes, camera, controls, renderer}
};

export default init;
