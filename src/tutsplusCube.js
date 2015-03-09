// first things first, initialize a renderer (with or without arguments) and set its size, 
// then append the canvas element to the document.

var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( width, height );

document.body.appendChild(renderer.domElement);
// this line is equivalent to a jQuery command like: $('body').append(renderer.domElement);

// initialise a scene to render
var scene = new THREE.Scene();

// create the cube: we need to define its geometry(cube, rectangle, etc), 
// its material(color/paint or wathever, shiny, opaque, etc), and initialise the resultant Mesh
var cubeGeometry = new THREE.BoxGeometry(100, 100, 100); 
// CubeGeometry is deprecated, renamed to BoxGeometry (Three.js build r70)
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x156CFF });
// Lambert is a material that reflects according to the Lambertian reflectance model... 
// that is, a kind of non-shiny reflecting object interacting with light in the same way 
// throughout all of its surface.
// the object's brightness appears to be the same from all perspectives, 
// without showing any particularly bright (or shiny) location on its surface.
// in any case, that's always better than flat shading.
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

// some rotation to show off the cube 
// (now commented out, being part of an earlier step of the tutorial)
// cube.rotation.y = Math.PI * 45 / 180;
// rotation is 45 degrees on the Y-axis, which are converted to radians

scene.add( cube );

// initialise the camera: set the FOV, the ratio (standard W/H), near and far clipping planes)
var camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 10000 );
// the camera determines the view frustum, the area in which the render actually draws stuff that we can see

camera.position.y = 160;
camera.position.z = 400;
// the Z-axis controls how distant is the camera perspective from your point of view
camera.lookAt(cube.position);

scene.add( camera );

var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
// the side parameter controls the sides that get drawn, in this case the skybox's inner walls
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200)

scene.add( skybox );
// apparently, the WebGL renderer in this version of Three.js (build r70) 
// is rendering the canvas element background as a skybox by default, 
// that or I don't know what's happening

scene.add(pointLight);

// we add a rotation anim to the cube, this time using the clock object
var clock = new THREE.Clock();

function render() {
  renderer.render( scene, camera );

  cube.rotation.y -= clock.getDelta();
  // the function getDelta should return the time since the last call. 
  // in this case it should subtract the time passed from the last call to from the cube's rotation on the Y-axis.

  requestAnimationFrame( render );
  // the usual function to enact some kind of "render loop", refreshing the page a set interval. 
}

render();