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
      position: { cx: 300, cy: 200 }
    },
    {
      id: 'revenues',
      title: 'GROW YOUR REVENUES',
      text: 'Boost your business growth with data-driven strategies.',
      color: '#ff00ff',
      position: { cx: 200, cy: 400 }
    },
    {
      id: 'customers',
      title: 'REACH YOUR CUSTOMERS',
      text: 'Connect with your target audience through personalized campaigns.',
      color: '#0066ff',
      position: { cx: 400, cy: 400 }
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center p-4 md:p-8 gap-8">
      {/* Circles container - full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-[600px] aspect-square">
          <svg width="100%" height="100%" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
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
                  r="140"
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
              cx="300"
              cy="300"
              r="40"
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
              x="300"
              y="300"
              textAnchor="middle"
              fill="white"
              className="text-sm font-bold"
            >
             BRAND
            </text>
          </svg>
        </div>
      </div>

      {/* Text container - full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 p-4 md:p-8">
        {hoveredCircle ? (
          <div className="text-white max-w-xl mx-auto lg:mx-0">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" 
              style={{ color: circles.find(c => c.id === hoveredCircle)?.color }}
            >
              {circles.find(c => c.id === hoveredCircle)?.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              {circles.find(c => c.id === hoveredCircle)?.text}
            </p>
          </div>
        ) : (
          <div className="text-white max-w-xl mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Your Brand Story</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Hover over the circles to explore how we can help grow your brand.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}