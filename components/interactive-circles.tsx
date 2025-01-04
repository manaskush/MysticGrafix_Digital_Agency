import { useState } from 'react';

interface Circle {
  id: 'stories' | 'revenues' | 'customers';
  title: string;
  text: string;
  color: string;
  position: { cx: number; cy: number };
}

export default function IntersectingCircles() {
  const [hoveredCircle, setHoveredCircle] = useState<Circle['id'] | null>(null);

  const circles: Circle[] = [
    {
      id: 'stories',
      title: 'TELL YOUR STORIES',
      text: 'Create compelling narratives that resonate with your audience.',
      color: '#00ff9d',
      position: { cx: 400, cy: 200 }
    },
    {
      id: 'revenues',
      title: 'GROW YOUR REVENUES',
      text: 'Boost your business growth with data-driven strategies.',
      color: '#ff00ff',
      position: { cx: 300, cy: 400 }
    },
    {
      id: 'customers',
      title: 'REACH YOUR CUSTOMERS',
      text: 'Connect with your target audience through personalized campaigns.',
      color: '#0066ff',
      position: { cx: 500, cy: 400 }
    }
  ];

  return (
    <div className="relative w-full min-h-screen  flex items-center justify-center p-8">
      <div className="relative w-[800px] h-[600px]">
        <svg width="100%" height="100%" viewBox="0 0 800 600">
          <defs>
            {circles.map((circle) => (
              <radialGradient key={`gradient-${circle.id}`} id={`gradient-${circle.id}`}>
                <stop offset="0%" stopColor={circle.color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={circle.color} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>
          
          <g style={{ mixBlendMode: 'lighten' }}>
            {circles.map((circle) => (
              <circle
                key={circle.id}
                cx={circle.position.cx}
                cy={circle.position.cy}
                r="160"
                fill={hoveredCircle === circle.id ? `url(#gradient-${circle.id})` : 'transparent'}
                stroke="white"
                strokeWidth="2"
                style={{ transition: 'all 0.3s ease' }}
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
                className="cursor-pointer"
              />
            ))}
          </g>
          
          <circle
            cx="400"
            cy="300"
            r="50"
            fill="#0066ff"
            className="cursor-pointer"
          />
          
          {circles.map((circle) => (
            <text
              key={`text-${circle.id}`}
              x={circle.position.cx}
              y={circle.position.cy}
              textAnchor="middle"
              fill="white"
              className="text-sm font-bold pointer-events-none"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              {circle.title}
            </text>
          ))}
          
          <text
            x="400"
            y="300"
            textAnchor="middle"
            fill="white"
            className="text-sm font-bold"
          >
            YOUR BRAND
          </text>
        </svg>

        <div className="absolute right-0 top-1/2 transform translate-x-[120%] -translate-y-1/2 w-96">
          {hoveredCircle && (
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4" style={{ color: circles.find(c => c.id === hoveredCircle)?.color }}>
                {circles.find(c => c.id === hoveredCircle)?.title}
              </h2>
              <p className="text-lg">
                {circles.find(c => c.id === hoveredCircle)?.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}