<script>
    import * as THREE from 'three';
    import { AsciiEffect } from '../node_modules/three/examples/jsm/effects/AsciiEffect.js';
    import { onMount } from 'svelte';

    export let objectSize, windowWidth, windowHeight;

    let element;
    let camera, scene, renderer, effect;
    let tetrahedron;
    
    const start = Date.now();
    
    onMount(() => {
        init();
        animate();
    })
    
    function init() {
        // Add camera
        camera = new THREE.PerspectiveCamera( 70, windowWidth / windowHeight, 1, 1000 );
        camera.position.y = 0;
        camera.position.z = 400;
    
        // Add scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0, 0, 0 );
    
        // Add light 1
        const pointLight1 = new THREE.PointLight( 0xffffff );
        pointLight1.position.set( 500, 500, 500 );
        scene.add( pointLight1 );
    
        // Add light 2
        const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
        pointLight2.position.set( - 500, - 500, - 500 );
        scene.add( pointLight2 );
    
        // Add shape
        tetrahedron = new THREE.Mesh( new THREE.TetrahedronGeometry( objectSize, 0), new THREE.MeshPhongMaterial( { flatShading: true } ) );
        tetrahedron.position.set(0, 0, 0);
        scene.add( tetrahedron );
    
        // Add renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( windowWidth, windowHeight );

        // Add Effect
        effect = new AsciiEffect( renderer, " .',;:clodxkO0KXNWM", element, { invert: true, strResolution: "low"} );
        effect.setSize( windowWidth, windowHeight );	
    
        //'#8FA2A3';'#DAE3E4';
        effect.domElement.style.color = '#B3C2C3';
        effect.domElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    
        
    
        window.addEventListener( 'resize', onWindowResize );
    }
    
    function onWindowResize() {
        camera.aspect = windowWidth / windowHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( windowWidth, windowHeight );
        effect.setSize( windowWidth, windowHeight );
    }
    
    function animate() {
        setTimeout( function() {
        requestAnimationFrame( animate );
        }, 1000 / 30 );	
        
        render();
    }
    
    function render() {
        const timer = Date.now() - start;
        //sphere.rotation.x = timer * 0.0003;
        //sphere.rotation.z = timer * 0.0002;
    
        tetrahedron.rotation.x = timer * -0.0003;
        tetrahedron.rotation.z = timer * -0.0002;
    
        effect.render( scene, camera );
    }
    
    </script>
    
    <main>
        <div bind:this={element} 
        style="
        width: 700px;
        height: 700px;
        left: 49vw;
        top: 10mm;
        position: fixed;">
        </div>
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