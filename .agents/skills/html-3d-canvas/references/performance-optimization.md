# Three.js Performance Optimization Guide

Optimizing Three.js applications ensures 60 FPS performance across desktop and mobile devices.

---

## 1. Renderer & Canvas Optimization

- **Cap Pixel Ratio**: High-DPI screens (Retina) can drop FPS drastically if rendering at native 3x pixel ratio.
  ```javascript
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  ```
- **Power Preference**: Force GPU selection.
  ```javascript
  renderer = new THREE.WebGLRenderer({
    powerPreference: 'high-performance',
    antialias: true
  });
  ```
- **Disable Precision in Shaders**: Use `mediump` or `lowp` for non-critical fragment shaders on mobile devices.

---

## 2. Geometry & Draw Calls

- **Use InstancedMesh for Duplicate Objects**: If rendering hundreds/thousands of identical meshes (trees, rocks, debris), use `InstancedMesh` instead of creating multiple `Mesh` objects.
  ```javascript
  const count = 1000;
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial();
  const instancedMesh = new THREE.InstancedMesh(geometry, material, count);

  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    dummy.position.set((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50);
    dummy.updateMatrix();
    instancedMesh.setMatrixAt(i, dummy.matrix);
  }
  scene.add(instancedMesh);
  ```
- **Merge Static Geometries**: Use `BufferGeometryUtils.mergeGeometries()` to merge static meshes with identical materials into a single geometry.

---

## 3. Texture & Light Optimization

- **Compress Textures**: Use compressed formats (KTX2 / Basis Universal) or WebP instead of heavy PNGs/JPEGs.
- **Shadow Maps**:
  - Keep shadow map size reasonable (e.g. `1024x1024` or `2048x2048`).
  - Set `shadow.camera.near`, `shadow.camera.far`, and camera bounds as tight as possible around the scene.
  - Disable shadows on static meshes that don't need them (`castShadow = false`, `receiveShadow = false`).
- **Limit Dynamic Lights**: Avoid more than 2-3 dynamic casting lights simultaneously; rely on environment maps (`envMap`) for ambient lighting.

---

## 4. Proper Resource Disposal (Memory Leaks)

Three.js does NOT automatically clear GPU memory when an object is removed from `scene.remove()`. You must explicitly dispose of geometries, materials, and textures:

```javascript
function disposeMesh(mesh) {
  if (!mesh) return;

  // Geometry
  if (mesh.geometry) {
    mesh.geometry.dispose();
  }

  // Material (can be an array or single material)
  if (mesh.material) {
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of materials) {
      // Textures in material
      for (const key of Object.keys(mat)) {
        if (mat[key] && mat[key].isTexture) {
          mat[key].dispose();
        }
      }
      mat.dispose();
    }
  }

  if (mesh.parent) {
    mesh.parent.remove(mesh);
  }
}
```
