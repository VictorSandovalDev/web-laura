"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip on mobile for performance
    const isMobile = window.innerWidth <= 768;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;

    // Reduced particles - subtle and elegant
    const particleCount = isMobile ? 60 : 100;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const palette = [
      new THREE.Color("#B2A18F"),
      new THREE.Color("#C8B9A8"),
      new THREE.Color("#DBD5C9"),
      new THREE.Color("#00416A"),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      velocities.push({
        x: (Math.random() - 0.5) * 0.012,
        y: (Math.random() - 0.5) * 0.012,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: isMobile ? 1 : 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Only 3 very subtle wireframe shapes
    const shapes: THREE.Mesh[] = [];
    const mat1 = new THREE.MeshBasicMaterial({ color: "#0F1C38", wireframe: true, transparent: true, opacity: 0.025 });
    const mat2 = new THREE.MeshBasicMaterial({ color: "#B2A18F", wireframe: true, transparent: true, opacity: 0.02 });

    const shapeCount = isMobile ? 2 : 3;
    for (let i = 0; i < shapeCount; i++) {
      const g = i % 2 === 0
        ? new THREE.TorusKnotGeometry(8 + Math.random() * 6, 1.5, 64, 8)
        : new THREE.IcosahedronGeometry(8 + Math.random() * 5, 1);
      const mesh = new THREE.Mesh(g, i % 2 === 0 ? mat1 : mat2);
      mesh.position.set((Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, -30 - Math.random() * 20);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = {
        rx: (Math.random() - 0.5) * 0.0015,
        ry: (Math.random() - 0.5) * 0.0015,
        fs: Math.random() * 0.3 + 0.2,
        fa: Math.random() * 1.5 + 0.5,
        iy: mesh.position.y,
      };
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Fewer, subtler lines
    const lineMat = new THREE.LineBasicMaterial({ color: "#B2A18F", transparent: true, opacity: 0.025 });
    let linesGroup = new THREE.Group();
    scene.add(linesGroup);

    function updateLines() {
      scene.remove(linesGroup);
      linesGroup = new THREE.Group();
      const pos = geo.attributes.position.array as Float32Array;
      const maxLines = isMobile ? 15 : 25;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 18) {
            const lg = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]),
              new THREE.Vector3(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]),
            ]);
            linesGroup.add(new THREE.Line(lg, lineMat));
            if (linesGroup.children.length > maxLines) break;
          }
        }
        if (linesGroup.children.length > maxLines) break;
      }
      scene.add(linesGroup);
    }

    const mouse = { x: 0, y: 0 };
    const mouseTarget = { x: 0, y: 0 };
    let scrollY = 0;
    let time = 0;
    let frame = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseTarget.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onScroll = () => { scrollY = window.pageYOffset; };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      time += 0.008;
      frame++;

      mouse.x += (mouseTarget.x - mouse.x) * 0.03;
      mouse.y += (mouseTarget.y - mouse.y) * 0.03;

      particles.rotation.y = mouse.x * 0.08;
      particles.rotation.x = mouse.y * 0.05;

      const pos = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;
        if (pos[i * 3] > 70) pos[i * 3] = -70;
        if (pos[i * 3] < -70) pos[i * 3] = 70;
        if (pos[i * 3 + 1] > 70) pos[i * 3 + 1] = -70;
        if (pos[i * 3 + 1] < -70) pos[i * 3 + 1] = 70;
      }
      geo.attributes.position.needsUpdate = true;

      if (frame % 45 === 0) updateLines();

      shapes.forEach((m) => {
        m.rotation.x += m.userData.rx;
        m.rotation.y += m.userData.ry;
        m.position.y = m.userData.iy + Math.sin(time * m.userData.fs) * m.userData.fa;
      });

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.01;
      camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.01;

      // Fade out faster on scroll
      const opacity = Math.max(0, 1 - scrollY / (window.innerHeight * 1.2));
      mat.opacity = 0.18 * opacity;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" />;
}
