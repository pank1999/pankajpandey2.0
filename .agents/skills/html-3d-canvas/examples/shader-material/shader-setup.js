import * as THREE from 'three';
import vertexShader from './vertex.glsl?raw';
import fragmentShader from './fragment.glsl?raw';

export function createCustomWavePlane() {
  const geometry = new THREE.PlaneGeometry(4, 4, 128, 128);

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uFrequency: { value: new THREE.Vector2(4, 2) },
      uDepthColor: { value: new THREE.Color('#1e1b4b') },
      uSurfaceColor: { value: new THREE.Color('#06b6d4') },
      uColorOffset: { value: 0.08 },
      uColorMultiplier: { value: 5.0 }
    },
    side: THREE.DoubleSide
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI * 0.4;

  return {
    mesh,
    update: (elapsedTime) => {
      material.uniforms.uTime.value = elapsedTime;
    }
  };
}
