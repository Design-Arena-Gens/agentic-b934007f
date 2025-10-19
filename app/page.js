export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#ffffff',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        Xbox One Controller
      </h1>

      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: '#ffffff',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        >
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#333333', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#1a1a1a', stopOpacity: 1}} />
            </linearGradient>

            <linearGradient id="gripGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#2a2a2a', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0d0d0d', stopOpacity: 1}} />
            </linearGradient>

            <linearGradient id="buttonA" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#7fdb6e', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#4caf50', stopOpacity: 1}} />
            </linearGradient>

            <linearGradient id="buttonB" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ff6b6b', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#e53935', stopOpacity: 1}} />
            </linearGradient>

            <linearGradient id="buttonX" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#64b5f6', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#1976d2', stopOpacity: 1}} />
            </linearGradient>

            <linearGradient id="buttonY" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ffd54f', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ffa000', stopOpacity: 1}} />
            </linearGradient>

            <linearGradient id="xboxButton" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#e0e0e0', stopOpacity: 1}} />
            </linearGradient>

            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>

            <filter id="innerShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main Controller Body */}
          <g filter="url(#shadow)">
            {/* Center Body */}
            <rect x="200" y="150" width="400" height="300" rx="40" fill="url(#bodyGradient)" stroke="#000000" strokeWidth="2"/>

            {/* Left Grip */}
            <path
              d="M 200 250 Q 180 280, 150 320 L 150 420 Q 150 450, 180 450 L 220 450 Q 230 450, 230 440 L 230 300 Q 230 280, 220 270 Z"
              fill="url(#gripGradient)"
              stroke="#000000"
              strokeWidth="2"
            />

            {/* Right Grip */}
            <path
              d="M 600 250 Q 620 280, 650 320 L 650 420 Q 650 450, 620 450 L 580 450 Q 570 450, 570 440 L 570 300 Q 570 280, 580 270 Z"
              fill="url(#gripGradient)"
              stroke="#000000"
              strokeWidth="2"
            />
          </g>

          {/* Left Trigger */}
          <rect x="190" y="140" width="80" height="25" rx="4" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>

          {/* Right Trigger */}
          <rect x="530" y="140" width="80" height="25" rx="4" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>

          {/* Left Bumper */}
          <rect x="210" y="165" width="120" height="20" rx="4" fill="#404040" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>

          {/* Right Bumper */}
          <rect x="470" y="165" width="120" height="20" rx="4" fill="#404040" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>

          {/* Left Analog Stick Base */}
          <circle cx="300" cy="260" r="45" fill="#1a1a1a" stroke="#000000" strokeWidth="2" filter="url(#innerShadow)"/>
          <circle cx="300" cy="260" r="35" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>
          <circle cx="300" cy="260" r="30" fill="url(#gripGradient)"/>
          {/* Stick texture */}
          <circle cx="300" cy="260" r="25" fill="none" stroke="#404040" strokeWidth="0.5" opacity="0.5"/>
          <circle cx="300" cy="260" r="20" fill="none" stroke="#404040" strokeWidth="0.5" opacity="0.5"/>

          {/* Right Analog Stick Base */}
          <circle cx="500" cy="340" r="45" fill="#1a1a1a" stroke="#000000" strokeWidth="2" filter="url(#innerShadow)"/>
          <circle cx="500" cy="340" r="35" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>
          <circle cx="500" cy="340" r="30" fill="url(#gripGradient)"/>
          {/* Stick texture */}
          <circle cx="500" cy="340" r="25" fill="none" stroke="#404040" strokeWidth="0.5" opacity="0.5"/>
          <circle cx="500" cy="340" r="20" fill="none" stroke="#404040" strokeWidth="0.5" opacity="0.5"/>

          {/* D-Pad Container */}
          <g>
            <circle cx="300" cy="360" r="50" fill="#1a1a1a" stroke="#000000" strokeWidth="2" filter="url(#innerShadow)"/>

            {/* D-Pad Cross */}
            {/* Up */}
            <rect x="290" y="325" width="20" height="30" rx="4" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>
            {/* Down */}
            <rect x="290" y="365" width="20" height="30" rx="4" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>
            {/* Left */}
            <rect x="255" y="350" width="30" height="20" rx="4" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>
            {/* Right */}
            <rect x="315" y="350" width="30" height="20" rx="4" fill="#2a2a2a" stroke="#000000" strokeWidth="1.5" filter="url(#shadow)"/>
            {/* Center piece */}
            <circle cx="300" cy="360" r="8" fill="#333333" stroke="#000000" strokeWidth="1"/>
          </g>

          {/* Face Buttons */}
          {/* Button A (Green) - Bottom */}
          <g filter="url(#shadow)">
            <circle cx="570" cy="290" r="22" fill="url(#buttonA)" stroke="#000000" strokeWidth="1.5"/>
            <text x="570" y="297" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#ffffff" textAnchor="middle">A</text>
          </g>

          {/* Button B (Red) - Right */}
          <g filter="url(#shadow)">
            <circle cx="610" cy="250" r="22" fill="url(#buttonB)" stroke="#000000" strokeWidth="1.5"/>
            <text x="610" y="257" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#ffffff" textAnchor="middle">B</text>
          </g>

          {/* Button X (Blue) - Left */}
          <g filter="url(#shadow)">
            <circle cx="530" cy="250" r="22" fill="url(#buttonX)" stroke="#000000" strokeWidth="1.5"/>
            <text x="530" y="257" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#ffffff" textAnchor="middle">X</text>
          </g>

          {/* Button Y (Yellow) - Top */}
          <g filter="url(#shadow)">
            <circle cx="570" cy="210" r="22" fill="url(#buttonY)" stroke="#000000" strokeWidth="1.5"/>
            <text x="570" y="217" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#ffffff" textAnchor="middle">Y</text>
          </g>

          {/* Xbox Button */}
          <g filter="url(#shadow)">
            <circle cx="400" cy="240" r="28" fill="url(#xboxButton)" stroke="#000000" strokeWidth="2"/>
            <circle cx="400" cy="240" r="24" fill="none" stroke="#107c10" strokeWidth="2"/>
            {/* Xbox Logo X */}
            <path
              d="M 390 230 L 400 240 L 410 230 M 390 250 L 400 240 L 410 250"
              stroke="#107c10"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="390" cy="230" r="3" fill="#107c10"/>
            <circle cx="410" cy="230" r="3" fill="#107c10"/>
            <circle cx="390" cy="250" r="3" fill="#107c10"/>
            <circle cx="410" cy="250" r="3" fill="#107c10"/>
          </g>

          {/* View Button (Left) */}
          <g filter="url(#shadow)">
            <rect x="340" y="235" width="25" height="10" rx="3" fill="#2a2a2a" stroke="#000000" strokeWidth="1"/>
            <rect x="343" y="238" width="5" height="4" rx="1" fill="#505050"/>
            <rect x="350" y="238" width="5" height="4" rx="1" fill="#505050"/>
          </g>

          {/* Menu Button (Right) */}
          <g filter="url(#shadow)">
            <rect x="435" y="235" width="25" height="10" rx="3" fill="#2a2a2a" stroke="#000000" strokeWidth="1"/>
            <line x1="440" y1="238" x2="455" y2="238" stroke="#505050" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="440" y1="242" x2="455" y2="242" stroke="#505050" strokeWidth="1.5" strokeLinecap="round"/>
          </g>

          {/* Share Button (Top Left of Xbox Button) */}
          <circle cx="375" cy="215" r="5" fill="#2a2a2a" stroke="#000000" strokeWidth="1" filter="url(#shadow)"/>

          {/* Port/Connector at Top */}
          <rect x="380" y="155" width="40" height="8" rx="2" fill="#0d0d0d" stroke="#000000" strokeWidth="1"/>

          {/* Grip Texture Details */}
          <g opacity="0.3">
            {/* Left grip dots */}
            <circle cx="195" cy="360" r="2" fill="#505050"/>
            <circle cx="195" cy="375" r="2" fill="#505050"/>
            <circle cx="195" cy="390" r="2" fill="#505050"/>
            <circle cx="185" cy="368" r="2" fill="#505050"/>
            <circle cx="185" cy="383" r="2" fill="#505050"/>

            {/* Right grip dots */}
            <circle cx="605" cy="360" r="2" fill="#505050"/>
            <circle cx="605" cy="375" r="2" fill="#505050"/>
            <circle cx="605" cy="390" r="2" fill="#505050"/>
            <circle cx="615" cy="368" r="2" fill="#505050"/>
            <circle cx="615" cy="383" r="2" fill="#505050"/>
          </g>
        </svg>
      </div>

      <p style={{
        color: '#cccccc',
        fontSize: '0.9rem',
        marginTop: '2rem',
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        Scalable SVG illustration with accurate proportions and detailed components
      </p>
    </div>
  );
}
