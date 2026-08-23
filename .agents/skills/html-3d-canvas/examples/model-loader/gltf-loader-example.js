import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export function loadModel(scene, modelPath, onProgressCallback) {
  // Setup DRACO decoder loader
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

  // Setup GLTF Loader
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);

  let loadedModel = null;

  gltfLoader.load(
    modelPath,
    (gltf) => {
      loadedModel = gltf.scene;

      // Enable shadows on all child meshes
      loadedModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(loadedModel);
    },
    (event) => {
      if (event.lengthComputable && onProgressCallback) {
        const percent = (event.loaded / event.total) * 100;
        onProgressCallback(percent);
      }
    },
    (error) => {
      console.error('Error loading GLTF model:', error);
    }
  );

  return {
    getModel: () => loadedModel
  };
}
