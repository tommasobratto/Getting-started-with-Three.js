    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // function perspectiveCamera(FOV, Aspect Ratio(width/height of viewport), near clipping plane, far clipping plane) 
    // clipping plane distance is the distance (near or far) from the camera over which objects will not be rendered
        
    var renderer = new THREE.WebGLRenderer();
        
    renderer.setSize( window.innerWidth, window.innerHeight )
    // function setSize(window.width, window.height);
    // set width and height of browser window to display the scene to render

    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry( 1, 1, 1 )
    // sets the number of vertices and faces of the object
    var material = new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 50 } );
    // basic material for testing, only the color is specified
    var cube = new THREE.Mesh( geometry, material );
    // fusion between form and substance (geometry and material), MESH!
    scene.add( cube );
    // the object will be added to the coordinates (0, 0, 0)

    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    
    light.position.set(1, 1, 2);

    scene.add( light );

    camera.position.z = 2; 
    // moving the camera out of the position of the cube

    function render() {
    // this is a render loop (draws the scene 60 times per second, OpenGL style!)
      requestAnimationFrame( render );

      cube.rotation.x += 0.05
      cube.rotation.y += 0.05

      // (^) setInterval() would work similarly, but this method pauses the rendering if the page is not in the foreground/the user changes tabs
      renderer.render( scene, camera );
    }

    render();