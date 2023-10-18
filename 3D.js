let screensaverActive = false;
let interactionTimeout;

function showScreensaver() {
    const screensaverContainer = document.getElementById('screensaver-container');
    screensaverContainer.style.display = 'block';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    screensaverContainer.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x888888 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(edges, edgesMaterial);
    cube.add(wireframe);

    camera.position.z = 30;

    const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

    screensaverActive = true;
}

function hideScreensaver() {
    const screensaverContainer = document.getElementById('screensaver-container');
    screensaverContainer.style.display = 'none';

    screensaverContainer.innerHTML = '';

    screensaverActive = false;
}

function resetInteractionTimer() {
    if (interactionTimeout) {
        clearTimeout(interactionTimeout);
    }
    interactionTimeout = setTimeout(showScreensaver, 60000);
}

document.addEventListener('mousemove', () => {
    if (screensaverActive) {
        hideScreensaver();
        resetInteractionTimer();
    } else {
        resetInteractionTimer();
    }
});

document.addEventListener('keydown', () => {
    if (screensaverActive) {
        hideScreensaver();
        resetInteractionTimer();
    } else {
        resetInteractionTimer();
    }
});

resetInteractionTimer();
