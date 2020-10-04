let scene, camera, renderer, cube;

function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(
		75, //field of view (FOV) the extent of the scene that is seen on the display at any given moment. The value is in degrees.
		window.innerWidth / window.innerHeight, // Aspect Ratio -  use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished.
		0.1, // near clipping plane
		1000 // far clipping plane
	);

	renderer = new THREE.WebGLRenderer({antialias: true });

	//init renderer - render the scene with the camera
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild( renderer.domElement );

	const geometry = new THREE.BoxGeometry( 2, 2, 2 );
	// const material = new THREE.MeshBasicMaterial( { color: 0xfd855a } );

	const texture = new THREE.TextureLoader().load('textures/crate.gif');
	const material = new THREE.MeshBasicMaterial({ map: texture });

	cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;

	const light = new THREE.PointLight(0xffffff, 1, Infinity);
    camera.add(light);

}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

// function for scaling
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
