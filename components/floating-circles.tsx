"use client"
import React, { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const FloatingCircle: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const x = (e.clientX / window.innerWidth) * 100; // Mouse X position as a percentage
      const y = (e.clientY / window.innerHeight) * 100; // Mouse Y position as a percentage
      setPosition({ x:  x, y:  y }); // Invert positions for opposite movement
    };

    const handleScroll = (): void => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScroll(scrollPercent);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-50">
      {/* Blue Circle */}
      <div 
        className="absolute w-[35rem] h-[35rem] rounded-full bg-blue-500/30 blur-3xl"
        style={{
          left: `${Math.max(0, position.x)}%`, // Ensure it doesn't go off the left side
          top: `${Math.max(0, Math.min(100, position.y + scroll))}%`, // Ensure it stays within vertical bounds
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      />
    </div>
  );
};

export default FloatingCircle;
