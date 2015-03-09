// first things first, initialize a renderer (with or without arguments) and set its size, 
// then append the canvas element to the document.

var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( width, height );

document.body.appendChild(renderer.domElement)
// this line is equivalent to a jQuery command like: $('body').append(renderer.domElement);

// initialise a scene to render
var scene = new THREE.scene;

