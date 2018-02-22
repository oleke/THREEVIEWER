var THREE = require('three');
import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './react_test.jsx';

export class THREEVIEWER{

  createScene(dom_id){
      var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.getElementById(dom_id).appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			animate();
  }
}


export function test(dom_id){
  ReactDOM.render(
  <ShoppingList name="Abiodun Ogunleke" />,
  document.getElementById(dom_id)
);
}
