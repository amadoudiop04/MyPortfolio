import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import "./container.css";
import image from "../../Ressources/github.png";

const Container = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

   
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5); 

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;
    controls.enableZoom = false;

    const loader = new GLTFLoader();
    loader.load(
      "../../models/computer.glb", // <-- Chemin vers ton fichier .glb
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 8, 8); // Ajuste l'échelle ici si nécessaire
        model.rotation.x = -0.2; // Rotation initiale
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Erreur lors du chargement du modèle GLB :", error);
      }
    );


    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

  
    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <main className="main-container" role="main">
      <section className="profile-card" aria-labelledby="profile-heading">
        <div className="profile-header">
          <div className="card-profile-img" aria-label="profile"></div>

          <div className="profile-info">
            <p className="text-greeting">Hello, I'm</p>
            <h2 className="text-name">Amadou Diop</h2>
            <h1 id="profile-heading" className="text-title">Junior Developer</h1>
          </div>
        </div>

        <div className="profile-actions">
          <a
            href="https://drive.google.com/file/d/1Aotkt7wFh8s48WUGcrwD_WTfiIr-1L0p/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button-wrapper"
          >
            <button className="btn-primary" aria-label="Download my CV">
              Download CV
            </button>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/amadoudiop04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="social-link"
            >
              <img className="social-icon" src={image} alt="GitHub logo" />
            </a>
          </div>
        </div>
      </section>

      <div className="jersey-container" ref={mountRef}></div>
    </main>
  );
};

export default Container;
