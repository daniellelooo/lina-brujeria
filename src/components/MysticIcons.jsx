export const TarotIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="12"
      y="8"
      width="40"
      height="48"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="url(#tarotGrad)"
    />
    <circle
      cx="32"
      cy="24"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M26 32 L32 38 L38 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="32"
      y1="38"
      x2="32"
      y2="48"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="tarotGrad"
        x1="12"
        y1="8"
        x2="52"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

// Icono de Bola de Cristal para Header/About
export const CrystalBallIcon = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="28"
      r="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="url(#crystalGrad)"
    />
    <ellipse cx="32" cy="28" rx="10" ry="8" fill="currentColor" opacity="0.2" />
    <circle cx="26" cy="24" r="3" fill="currentColor" opacity="0.6" />
    <path
      d="M20 44 L24 44 C24 44 26 50 32 50 C38 50 40 44 40 44 L44 44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="24"
      y1="44"
      x2="24"
      y2="48"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="40"
      y1="44"
      x2="40"
      y2="48"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <radialGradient id="crystalGrad">
        <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
      </radialGradient>
    </defs>
  </svg>
);

// Icono de Luna Mística para About
export const MoonIcon = ({ className = "w-32 h-32" }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 108 C42 108 24 90 24 68 C24 46 42 28 64 28 C66 28 68 28.2 70 28.5 C60 34 54 45 54 58 C54 75 67 88 84 88 C90 88 95 86 100 83 C94 98 80 108 64 108 Z"
      fill="url(#moonGrad)"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="45" cy="55" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="55" cy="45" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="70" r="4" fill="currentColor" opacity="0.5" />
    <defs>
      <linearGradient
        id="moonGrad"
        x1="24"
        y1="28"
        x2="100"
        y2="108"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
      </linearGradient>
    </defs>
  </svg>
);

// Icono de Estrellas Místicas para Hero/About
export const SparklesIcon = ({ className = "w-12 h-12" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 8 L34 20 L42 16 L36 26 L48 28 L36 30 L42 40 L34 36 L32 48 L30 36 L22 40 L28 30 L16 28 L28 26 L22 16 L30 20 Z"
      fill="url(#sparkGrad)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="14" cy="14" r="2" fill="currentColor" />
    <circle cx="50" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
    <circle cx="52" cy="50" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="12" cy="48" r="1.5" fill="currentColor" opacity="0.6" />
    <defs>
      <radialGradient id="sparkGrad">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
      </radialGradient>
    </defs>
  </svg>
);

// Icono grande de Estrella para Hero principal
export const MysticStarIcon = ({ className = "w-24 h-24" }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 12 L74 48 L108 38 L84 64 L108 90 L74 80 L64 116 L54 80 L20 90 L44 64 L20 38 L54 48 Z"
      fill="url(#starGrad)"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle
      cx="64"
      cy="64"
      r="12"
      fill="url(#centerGrad)"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="64" cy="64" r="6" fill="currentColor" opacity="0.8" />
    <defs>
      <radialGradient id="starGrad">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
        <stop offset="40%" stopColor="#c4b5fd" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="centerGrad">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.3" />
      </radialGradient>
    </defs>
  </svg>
);

export const CleansingIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="32"
      r="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="url(#cleanGrad)"
    />
    <path
      d="M32 12 L32 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32 42 L32 52"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M52 32 L42 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22 32 L12 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="32"
      cy="32"
      r="8"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <defs>
      <radialGradient id="cleanGrad">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
      </radialGradient>
    </defs>
  </svg>
);

export const LoveIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 50 C32 50 12 38 12 24 C12 18 16 14 20 14 C24 14 28 16 32 20 C36 16 40 14 44 14 C48 14 52 18 52 24 C52 38 32 50 32 50 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="url(#loveGrad)"
      strokeLinejoin="round"
    />
    <path
      d="M32 24 L32 34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M27 29 L37 29"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="loveGrad"
        x1="12"
        y1="14"
        x2="52"
        y2="50"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const ProsperityIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="32"
      r="18"
      stroke="currentColor"
      strokeWidth="2"
      fill="url(#prospGrad)"
    />
    <text
      x="32"
      y="40"
      fontSize="24"
      fill="currentColor"
      textAnchor="middle"
      fontWeight="bold"
    >
      $
    </text>
    <path
      d="M16 16 L20 20 M48 16 L44 20 M16 48 L20 44 M48 48 L44 44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <radialGradient id="prospGrad">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
      </radialGradient>
    </defs>
  </svg>
);

export const ProtectionIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 10 L50 18 L50 34 C50 44 42 52 32 54 C22 52 14 44 14 34 L14 18 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="url(#protGrad)"
      strokeLinejoin="round"
    />
    <path
      d="M24 32 L29 37 L40 26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="protGrad"
        x1="14"
        y1="10"
        x2="50"
        y2="54"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const BathIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 36 L8 42 C8 46 10 48 14 48 L50 48 C54 48 56 46 56 42 L56 36 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="url(#bathGrad)"
    />
    <rect
      x="8"
      y="32"
      width="48"
      height="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 32 L20 28 C20 22 24 18 32 18 C32 18 32 24 32 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="24" cy="22" r="2" fill="currentColor" />
    <circle cx="32" cy="20" r="2" fill="currentColor" />
    <circle cx="40" cy="22" r="2" fill="currentColor" />
    <defs>
      <linearGradient
        id="bathGrad"
        x1="8"
        y1="36"
        x2="56"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);
