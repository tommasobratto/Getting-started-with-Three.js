// set scene size
var WIDTH = 400;
  HEIGHT = 300;

// set camera attributes
var VIEW_ANGLE = 45;
  ASPECT = WIDTH / HEIGHT
  NEAR = 0.1;
  FAR = 10000;

// Create a renderer, a camera and a scene
var renderer = new THREE.WebGLRenderer({ antialias: true });
var camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );  
var scene = new THREE.Scene();

scene.add( camera );

// pull back the camera on z axis
camera.position.z = 300;

// initialise the renderer
renderer.setSize( WIDTH, HEIGHT );

// attach the DOM renderer element
document.body.appendChild( renderer.domElement )

// sphere vars
var radius = 50;
  segment = 16;
  rings = 16;

// create a sphere mesh
var sphere = new THREE.Mesh( new THREE.SphereGeometry( radius, segment, rings, 
sphereMaterial ));

scene.add( sphere )

// add Lambert material to the sphere (type of reflection)
var sphereMaterial = new THREE.MeshPhongMaterial( {color: 0xCC0000, specular: 0x009900, shininess: 50, ambient: 0x030303} )

// create a point light
var directionalLight = new THREE.DirectionalLight({ color: 0x030303 })

// set position
directionalLight.position.set( 1, 1, 1 )

scene.add( directionalLight )

sphere.geometry.dynamic = true;
sphere.geometry.verticesNeedUpdate = true;
sphere.geometry.normalsNeedUpdate = true;

// render everything
function render() {
requestAnimationFrame( render );

sphere.rotation.x += 0.05;
sphere.rotation.y += 0.05;
sphere.rotation.z += 0.05;

renderer.render( scene, camera );
};

render();



