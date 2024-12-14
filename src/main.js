import * as THREE from "three";
import init from "./init.js";

const { scene, canvas, sizes, camera, renderer, controls } = init();

const clock = new THREE.Clock();
var delta = null;
var elapsedTime = null;

const tick = () => {
    delta = clock.getDelta();
    elapsedTime = clock.getElapsedTime();

    //
    // Your code here
    //

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();
console.log("Sucessful ticks starting");

window.addEventListener("resize", (e) => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

const rayCaster = new THREE.Raycaster();
const handleClick = (e) => {
    const pointer = new THREE.Vector2();

    pointer.x = (e.clientX / sizes.width) * 2 - 1;
    pointer.y = -((e.clientY / sizes.height) * 2 - 1);

    rayCaster.setFromCamera(pointer, camera);
    const intersections = rayCaster.intersectObjects(group.children);

    //
    // Your code for mouse clicks on objects here
    //
};

canvas.addEventListener("click", handleClick);

//
// Uncomment code below to enable double click full screen
//

// canvas.addEventListener("dblclick", (e) => {
//     document.fullscreenElement
//         ? document.exitFullscreen()
//         : canvas.requestFullscreen();
// });