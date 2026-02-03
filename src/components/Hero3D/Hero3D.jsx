import React, { useEffect, useRef } from 'react';

const Hero3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationId;
    let rotation = 0;

    const drawCube = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      const size = 80;
      const points = [
        [-size, -size, -size],
        [size, -size, -size],
        [size, size, -size],
        [-size, size, -size],
        [-size, -size, size],
        [size, -size, size],
        [size, size, size],
        [-size, size, size]
      ];

      // Rotation 3D
      const rotatedPoints = points.map(p => {
        let x = p[0], y = p[1], z = p[2];
        
        const cosA = Math.cos(rotation);
        const sinA = Math.sin(rotation);
        let newX = x * cosA - z * sinA;
        let newZ = x * sinA + z * cosA;
        
        const cosB = Math.cos(rotation * 0.7);
        const sinB = Math.sin(rotation * 0.7);
        let newY = y * cosB - newZ * sinB;
        newZ = y * sinB + newZ * cosB;
        
        return [newX, newY, newZ];
      });

      // Dessiner les arêtes
      const edges = [
        [0,1],[1,2],[2,3],[3,0],
        [4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7]
      ];

      ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';
      ctx.lineWidth = 2;

      edges.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(rotatedPoints[start][0], rotatedPoints[start][1]);
        ctx.lineTo(rotatedPoints[end][0], rotatedPoints[end][1]);
        ctx.stroke();
      });

      // Dessiner les points
      rotatedPoints.forEach(p => {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
        ctx.beginPath();
        ctx.arc(p[0], p[1], 4, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
      rotation += 0.01;
      animationId = requestAnimationFrame(drawCube);
    };

    drawCube();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-96 bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg"
    />
  );
};

export default Hero3D;