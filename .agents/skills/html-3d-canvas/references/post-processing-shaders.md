# Post-Processing & Custom Shaders Guide

This reference explains how to add visual effects (Bloom, Depth of Field, Chromatic Aberration) and custom GLSL materials in Three.js with Vite.

---

## 1. Post-Processing Setup with EffectComposer

```javascript
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// Setup Composer
const composer = new EffectComposer(renderer);
composer.setSize(window.innerWidth, window.innerHeight);
composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Base Render Pass
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Bloom Pass
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.5, // strength
  0.4, // radius
  0.85 // threshold
);
composer.addPass(bloomPass);

// In the animation tick function, replace renderer.render with composer.render:
function tick() {
  composer.render();
  requestAnimationFrame(tick);
}
```

---

## 2. Custom ShaderMaterial Integration

```javascript
import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl?raw';
import fragmentShader from './shaders/fragment.glsl?raw';

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#3b82f6') },
    uTexture: { value: null }
  },
  transparent: true,
  side: THREE.DoubleSide
});

// Update uTime in animation loop
function tick() {
  const elapsedTime = clock.getElapsedTime();
  material.uniforms.uTime.value = elapsedTime;
}
```

---

## 3. Vertex & Fragment Shader Guidelines

### Vertex Shader (`vertex.glsl`)
```glsl
uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
    vUv = uv;
    vNormal = normal;

    vec3 pos = position;
    // Add wave displacement effect based on uTime
    pos.z += sin(pos.x * 5.0 + uTime * 2.0) * 0.1;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
```

### Fragment Shader (`fragment.glsl`)
```glsl
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
    // Gradient effect along UV
    vec3 finalColor = mix(uColor, vec3(1.0, 0.5, 0.2), vUv.y);

    // Subtle brightness animation
    float pulse = sin(uTime * 3.0) * 0.1 + 0.9;
    finalColor *= pulse;

    gl_FragColor = vec4(finalColor, 1.0);
}
```
