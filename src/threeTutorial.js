// set scene size
var WIDTH = 400;
  HEIGHT = 300;

// set camera attributes
var VIEW_ANGLE = 45;
  ASPECT = WIDTH / HEIGHT
  NEAR = 0.1;
  FAR = 10000;

// Create a renderer, a camera and a scene
var renderer = new THREE.WebGLRenderer();
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
var sphereMaterial = new THREE.MeshLambertMaterial( {color: 0xCC0000} )

// create a point light
var pointLight = new THREE.PointLight(0xFFFFFF)

// set position
pointLight.position = 10;
pointLight.position = 50;
pointLight.position = 130;

scene.add( pointLight )

sphere.geometry.dynamic = true;
sphere.geometry.verticesNeedUpdate = true;
sphere.geometry.normalsNeedUpdate = true;

// render everything
renderer.render( scene, camera );