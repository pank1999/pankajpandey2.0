# Vite Setup & Dependency Guide for Three.js

This reference provides setup instructions, directory conventions, and plugin configurations for building 3D web apps using Three.js and Vite.

---

## Recommended Directory Structure

```
my-3d-app/
├── public/
│   ├── models/
│   │   └── character.glb
│   ├── textures/
│   │   ├── env/
│   │   └── surface_metal_roughness.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Scene.js
│   │   ├── ModelLoader.js
│   │   └── Lighting.js
│   ├── shaders/
│   │   ├── vertex.glsl
│   │   └── fragment.glsl
│   ├── style.css
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

---

## Recommended Packages

### Core Dependencies
```bash
npm install three gsap lil-gui
```

- `three`: Core 3D engine.
- `gsap`: Timeline and tweening animations (camera moves, object transitions).
- `lil-gui`: Lightweight debugging GUI overlay.

### Post-Processing & Physics (Optional)
```bash
npm install postprocessing @dimforge/rapier3d-compat
```

- `postprocessing`: High performance post-processing library for Three.js.
- `@dimforge/rapier3d-compat`: Fast WebAssembly 3D physics engine.

---

## Configuring Raw GLSL Imports in Vite

To import `.glsl`, `.vert`, or `.frag` files directly into your JavaScript files:

### Option 1: Vite Query (`?raw`)
No extra plugin required:
```javascript
import vertexShader from './shaders/vertex.glsl?raw';
import fragmentShader from './shaders/fragment.glsl?raw';

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader
});
```

### Option 2: `vite-plugin-string`
Add plugin to `vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import vitePluginString from 'vite-plugin-string';

export default defineConfig({
  plugins: [
    vitePluginString()
  ]
});
```

Now you can write direct imports:
```javascript
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
```

---

## Building & Deployment

```bash
# Start local development server with hot module reloading
npm run dev

# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```
