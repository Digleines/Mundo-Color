import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  const dimensions = {
    sm: { width: 140, height: 50 },
    md: { width: 180, height: 64 },
    lg: { width: 240, height: 86 },
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 320 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-10 sm:h-12"
      >
        <defs>
          {/* Subtle gold gradient for the botanical branch */}
          <linearGradient id="goldLaurel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFAD47" />
            <stop offset="50%" stopColor="#F6D172" />
            <stop offset="100%" stopColor="#C99427" />
          </linearGradient>
        </defs>

        {/* Botanical Laurel Wreath Arc */}
        <g stroke="url(#goldLaurel)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Circular bottom arch */}
          <path d="M 125 78 C 150 102, 230 105, 275 65 C 290 50, 296 32, 290 18" />
          
          {/* Leaves along the branch */}
          <path d="M 270 68 C 285 70, 292 60, 295 50 C 285 52, 275 60, 270 68 Z" fill="url(#goldLaurel)" fillOpacity="0.25" />
          <path d="M 285 45 C 300 45, 305 32, 304 22 C 295 26, 287 36, 285 45 Z" fill="url(#goldLaurel)" fillOpacity="0.25" />
          <path d="M 260 25 C 275 22, 280 10, 275 2 C 265 8, 260 16, 260 25 Z" fill="url(#goldLaurel)" fillOpacity="0.25" />
          <path d="M 235 22 C 248 18, 250 8, 245 2 C 238 6, 235 14, 235 22 Z" fill="url(#goldLaurel)" fillOpacity="0.25" />
          <path d="M 280 58 C 290 56, 296 46, 294 38" />
          <path d="M 288 38 C 296 34, 299 26, 297 18" />
        </g>

        {/* Cursive "Mundo" */}
        <text
          x="30"
          y="68"
          fill={isDark ? '#F3EDF8' : '#6A4B82'}
          style={{
            fontFamily: "'Alex Brush', cursive",
            fontSize: '78px',
            fontWeight: 400,
            letterSpacing: '1px',
          }}
        >
          Mundo
        </text>

        {/* "COLOR" in tracked sans/serif */}
        <text
          x="142"
          y="76"
          fill={isDark ? '#E5D6F2' : '#88739D'}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '26px',
            fontWeight: 700,
            letterSpacing: '4px',
          }}
        >
          COLOR
        </text>

        {/* "DETALLES CON AMOR" */}
        <text
          x="143"
          y="95"
          fill={isDark ? '#D1BDDF' : '#5C4E6D'}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '10.5px',
            fontWeight: 600,
            letterSpacing: '2.5px',
          }}
        >
          DETALLES CON AMOR
        </text>
      </svg>
    </div>
  );
};
