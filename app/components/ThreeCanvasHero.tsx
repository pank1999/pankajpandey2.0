"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvasHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    // Add ambient dark fog to blend smoothly into deep space background #060913
    scene.fog = new THREE.FogExp2(0x060913, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f0ff, 3, 20);
    cyanPointLight.position.set(4, 3, 3);
    scene.add(cyanPointLight);

    const purplePointLight = new THREE.PointLight(0x8b5cf6, 3, 20);
    purplePointLight.position.set(-4, -3, 2);
    scene.add(purplePointLight);

    const pinkPointLight = new THREE.PointLight(0xec4899, 2, 15);
    pinkPointLight.position.set(0, 4, -2);
    scene.add(pinkPointLight);

    // 3. Central Floating 3D Geometries Group
    const group = new THREE.Group();
    scene.add(group);

    // Geometry 1: Torus Knot (Wireframe Cyber Ring)
    const torusGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      emissive: 0x005577,
      roughness: 0.2,
      metalness: 0.8,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    group.add(torusKnot);

    // Geometry 2: Core Crystal (Icosahedron) inside torus knot
    const coreGeometry = new THREE.IcosahedronGeometry(0.7, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xa855f7,
      emissive: 0x3b0764,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.6,
      ior: 1.5,
    });
    const coreCrystal = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreCrystal);

    // Geometry 3: Floating Outer Ring Particles
    const ringGeo = new THREE.RingGeometry(2.2, 2.25, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    });
    const outerRing = new THREE.Mesh(ringGeo, ringMat);
    outerRing.rotation.x = Math.PI / 3;
    group.add(outerRing);

    // 4. Background Particle Constellation
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const purpleColor = new THREE.Color(0x8b5cf6);
    const pinkColor = new THREE.Color(0xec4899);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 3;

      // Color variation
      const rand = Math.random();
      const chosenColor = rand < 0.4 ? cyanColor : rand < 0.8 ? purpleColor : pinkColor;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // 5. Mouse Parallax Physics
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / target parallax lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.x = elapsedTime * 0.2 + targetY * 0.4;
      group.rotation.y = elapsedTime * 0.25 + targetX * 0.4;

      torusKnot.rotation.x = elapsedTime * 0.3;
      torusKnot.rotation.y = elapsedTime * 0.4;

      coreCrystal.rotation.x = -elapsedTime * 0.4;
      coreCrystal.rotation.y = -elapsedTime * 0.5;

      outerRing.rotation.z = elapsedTime * 0.15;

      // Particle subtle wave
      particleSystem.rotation.y = elapsedTime * 0.03;
      particleSystem.rotation.x = targetY * 0.1;

      // Point light orbit
      cyanPointLight.position.x = Math.sin(elapsedTime * 0.7) * 5;
      cyanPointLight.position.y = Math.cos(elapsedTime * 0.5) * 4;

      purplePointLight.position.x = Math.cos(elapsedTime * 0.6) * 5;
      purplePointLight.position.y = Math.sin(elapsedTime * 0.8) * 4;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
