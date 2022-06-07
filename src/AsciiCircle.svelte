<script>
    import * as THREE from 'three';
    import { AsciiEffect } from '../node_modules/three/examples/jsm/effects/AsciiEffect.js';

    export let objectSize, windowScale;
    
    let windowWidth, windowHeight;
    let camera, scene, renderer, effect;
    let sphere;
    
    const start = Date.now();
    
    init();
    animate();
    
    function init() {
        windowWidth = window.innerWidth - windowScale;
        windowHeight = window.innerHeight - windowScale;

        camera = new THREE.PerspectiveCamera( 70, window.innerWidth /  window.innerHeight, 1, 1000 );
        camera.position.y = 0;
        camera.position.z = 400;
    
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0, 0, 0 );
    
        const pointLight1 = new THREE.PointLight( 0xffffff );
        pointLight1.position.set( 500, 500, 500 );
        scene.add( pointLight1 );
    
        const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
        pointLight2.position.set( - 500, - 500, - 500 );
        scene.add( pointLight2 );
    
        //tetrahedron = new THREE.Mesh( new THREE.TetrahedronGeometry( 100, 0), new THREE.MeshPhongMaterial( { flatShading: true } ) );
        //tetrahedron.position.set(-250, 75, 0);
        //scene.add( tetrahedron );
    
        sphere = new THREE.Mesh( new THREE.SphereGeometry( objectSize, 15, 8 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
        sphere.position.set(0, 0, 0);
        scene.add( sphere );
    
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( windowWidth, windowHeight );
    
        effect = new AsciiEffect( renderer, " .',;:clodxkO0KXNWM", { invert: true, strResolution: "medium"} );
        effect.setSize( windowWidth, windowWidth );	
    
        //'#8FA2A3';'#DAE3E4';
        effect.domElement.style.color = '#B3C2C3';
        effect.domElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    
        document.body.appendChild( effect.domElement );
    
        window.addEventListener( 'resize', onWindowResize );
    }
    
    function onWindowResize() {
        windowWidth = window.innerWidth - windowScale;
        windowHeight = window.innerHeight - windowScale;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
       // renderer.setSize( window.innerWidth, window.innerHeight );
       // effect.setSize( window.innerWidth, window.innerHeight );
    }
    
    function animate() {
        setTimeout( function() {
        requestAnimationFrame( animate );
        }, 1000 / 30 );	
        
        render();
    }
    
    function render() {
        const timer = Date.now() - start;
        sphere.rotation.x = timer * 0.0003;
        sphere.rotation.z = timer * 0.0002;
    
        //tetrahedron.rotation.x = timer * -0.0003;
        //tetrahedron.rotation.z = timer * -0.0002;
    
        effect.render( scene, camera );
    }
    
    </script>
    
    <main>
    </main>
    
    <style>
        main {
        position: absolute;

		/*
		text-align: center;
		overflow: hidden;

		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		*/
	}

        @media (min-width: 640px) {
            main {
                max-width: none;
            }
        }
    </style>