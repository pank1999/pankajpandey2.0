---
name: html-3d-canvas
description: Guidelines, patterns, and reference templates for creating high-performance interactive 3D web experiences using Three.js, Vite, HTML5, CSS3, and JavaScript/TypeScript.
---

# HTML 3D Canvas with Three.js & Vite

This skill provides comprehensive patterns, workflows, and code structures for building 3D web applications using **Three.js** and **Vite**.

---

## 1. Quick Start & Vite Setup

To set up a modern Three.js environment using Vite:

```bash
# Create vanilla JavaScript or TypeScript Vite project
npx -y create-vite@latest ./ --template vanilla

# Install core dependencies
npm install three gsap lil-gui

# Install developer types (for TypeScript or IDE autocompletion)
npm install -D @types/three vite-plugin-string
```

---

## 2. Core Three.js Architecture

Every standard Three.js canvas app should follow a modular setup:

### Base HTML Layout (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive 3D Experience</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <!-- Fullscreen WebGL Canvas Container -->
  <div id="app">
    <canvas id="webgl-canvas"></canvas>
    <!-- DOM UI Overlay -->
    <div class="ui-overlay">
      <h1>3D Canvas Experience</h1>
    </div>
  </div>
  <script type="module" src="/main.js"></script>
</body>
</html>
```

### Full Canvas CSS (`style.css`)
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0d0e15;
  font-family: system-ui, -apple-system, sans-serif;
}

#webgl-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 1;
}

.ui-overlay {
  position: relative;
  z-index: 10;
  pointer-events: none;
  padding: 2rem;
  color: #ffffff;
}

.ui-overlay * {
  pointer-events: auto;
}
```

---

## 3. Main Scene Setup (`main.js`)

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Experience {
  constructor(canvas) {
    this.canvas = canvas;
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(window.devicePixelRatio, 2)
    };

    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControls();
    this.initEvents();
    this.tick();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.camera.position.set(0, 2, 5);
    this.scene.add(this.camera);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
  }

  initEvents() {
    window.addEventListener('resize', () => this.onResize());
  }

  onResize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;
    this.sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }

  tick() {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = this.clock.getDelta();

    // Update controls
    this.controls.update();

    // Render step
    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(() => this.tick());
  }

  destroy() {
    window.removeEventListener('resize', () => this.onResize());
    this.controls.dispose();
    this.renderer.dispose();
  }
}

new Experience(document.querySelector('#webgl-canvas'));
```

---

## 4. Key Workflows & Techniques

### PBR Lighting & Environment
- Use `THREE.DirectionalLight` and `THREE.AmbientLight` for directional shadows and base fill.
- Load HDR environment maps using `RGBELoader` for accurate reflections on `MeshStandardMaterial` and `MeshPhysicalMaterial`.

### Asset Management (GLTF & DRACO)
- Use `GLTFLoader` with `DRACOLoader` for compact 3D assets (`.gltf` / `.glb`).
- Place assets in Vite's `public/` directory (e.g. `public/models/mesh.glb`) to serve them as static URLs (`/models/mesh.glb`).

### Interaction & Raycasting
- Track normalized mouse coordinates `(x: [-1, 1], y: [-1, 1])`.
- Use `THREE.Raycaster` to intersect objects on `pointermove` or `click`.
- Use **GSAP** for smooth camera transitions and object animations.

### Custom Shaders in Vite
- Use `vite-plugin-string` or Vite raw imports (`import vert from './vertex.glsl?raw'`) to load GLSL files into `THREE.ShaderMaterial` or `THREE.CustomShaderMaterial`.

### Performance & Memory Management
- Reuse geometries and materials whenever possible.
- Use `InstancedMesh` for repeated objects (e.g., particles, vegetation, grid items).
- Traversal & disposal pattern: call `.dispose()` on geometries, materials, and textures when removing objects from the scene.

---

## 5. Reference Documentation

- [Vite Setup Guide](file:///home/pankajpandey/me/pankajpandey2.0/.agents/skills/html-3d-canvas/references/vite-setup-guide.md)
- [Performance Optimization](file:///home/pankajpandey/me/pankajpandey2.0/.agents/skills/html-3d-canvas/references/performance-optimization.md)
- [Post-Processing & Custom Shaders](file:///home/pankajpandey/me/pankajpandey2.0/.agents/skills/html-3d-canvas/references/post-processing-shaders.md)

---

## 6. Example Templates

- [Basic Scene Example](file:///home/pankajpandey/me/pankajpandey2.0/.agents/skills/html-3d-canvas/examples/basic-scene/main.js)
- [GLTF Loader Template](file:///home/pankajpandey/me/pankajpandey2.0/.agents/skills/html-3d-canvas/examples/model-loader/gltf-loader-example.js)
- [Shader Setup Template](file:///home/pankajpandey/me/pankajpandey2.0/.agents/skills/html-3d-canvas/examples/shader-material/shader-setup.js)