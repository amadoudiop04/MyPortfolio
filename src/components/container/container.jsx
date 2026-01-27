import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import "./container.css";
import image from "../../Ressources/github.png";

const Container = () => {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x6366f1, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;
    controls.enableZoom = false;
    controls.dampingFactor = 0.05;

    // Création d'un objet 3D informatique (Circuit Board)
    const createComputerArt = () => {
      const group = new THREE.Group();

      // Base de la circuit board
      const baseGeometry = new THREE.BoxGeometry(4, 4, 0.2);
      const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.8,
        roughness: 0.2,
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      group.add(base);

      // Créer des points de connexion (circuits)
      const pointGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const pointMaterial = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        emissive: 0x4f46e5,
        metalness: 0.9,
        roughness: 0.1,
      });

      const positions = [
        [-1.5, 1.5, 0.15], [-1.5, -1.5, 0.15], [1.5, 1.5, 0.15], [1.5, -1.5, 0.15],
        [0, 1.5, 0.15], [0, -1.5, 0.15], [-1.5, 0, 0.15], [1.5, 0, 0.15],
        [0, 0, 0.15]
      ];

      positions.forEach((pos) => {
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        point.position.set(pos[0], pos[1], pos[2]);
        group.add(point);
      });

      // Lignes de connexion
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x6366f1,
        linewidth: 2,
      });

      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = [];

      // Créer des connexions entre les points
      const connections = [
        [0, 1], [0, 2], [1, 3], [2, 3], [4, 0], [5, 1], [6, 0], [7, 2],
        [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8]
      ];

      connections.forEach(([start, end]) => {
        linePositions.push(
          positions[start][0], positions[start][1], positions[start][2],
          positions[end][0], positions[end][1], positions[end][2]
        );
      });

      lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      group.add(lines);

      // Ajouter des petits cubes pour l'effet technologique
      const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0xec4899,
        emissive: 0xec4899,
      });

      const randomPoints = [
        [-0.8, 0.8], [0.8, -0.8], [-0.3, 1.2], [0.3, -1.2], [1.2, 0.3]
      ];

      randomPoints.forEach((pos) => {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(pos[0], pos[1], 0.2);
        group.add(cube);
      });

      return group;
    };

    const computerArt = createComputerArt();
    scene.add(computerArt);
    setIsLoading(false);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      
      // Animation supplémentaire pour les points
      computerArt.children.forEach((child) => {
        if (child.isMesh && child.geometry.type === 'SphereGeometry') {
          child.rotation.y += 0.005;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(mat => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <main className="main-container" role="main">
      <section className="profile-card" aria-labelledby="profile-heading">
        <div className="profile-header">
          <div className="card-profile-img" aria-label="profile"></div>

          <div className="profile-info">
            <h1 className="text-greeting">Hello, I'm</h1>
            <h2 className="text-name">Amadou Diop</h2>
            <h3 id="profile-heading" className="text-title">Junior Developer</h3>
          </div>
        </div>

        <div className="profile-actions">
          <a
            href="https://docs.google.com/document/d/1qcx6xXyEw_13vPfCigk4zCv9yZUDvGemxZqbR5gUnU8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button-wrapper"
          >
            <button className="btn-primary" aria-label="Download my CV">
              📄 Download CV
            </button>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/amadoudiop04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="social-link"
              title="GitHub"
            >
              <img className="social-icon" src={image} alt="GitHub" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      <div className="jersey-container" ref={mountRef}>
        {isLoading && (
          <div className="model-loading">
            <div className="loading-spinner"></div>
            <p>Chargement du modèle 3D...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Container;
