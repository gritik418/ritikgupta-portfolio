import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Robot = () => {
  const robotRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Floating animation
      gsap.to(".robot-body", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Eye and beam horizontal sync animation
      gsap.to(".eye-scanner-group", {
        x: 24,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Pulse animation for energy core
      gsap.to(".robot-core", {
        scale: 1.2,
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Scanning beam sweep animation
      gsap.to(".robot-beam", {
        rotate: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "left center",
      });
    },
    { scope: robotRef },
  );

  return (
    <div
      ref={robotRef}
      className="relative w-48 h-64 flex items-center justify-center pointer-events-none"
    >
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] relative z-10 overflow-visible"
      >
        <defs>
          <radialGradient
            id="scanning-gradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0 0) rotate(0) scale(400 200)"
          >
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <filter id="eye-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse
          cx="50"
          cy="110"
          rx="25"
          ry="5"
          fill="rgba(139,92,246,0.1)"
          className="animate-pulse"
        />

        <g className="robot-body">
          {/* Head */}
          <rect
            x="30"
            y="20"
            width="40"
            height="35"
            rx="12"
            fill="#1F2937"
            stroke="#6366F1"
            strokeWidth="2"
          />
          {/* Eye Visor */}
          <rect x="35" y="30" width="30" height="12" rx="6" fill="#111827" />

          {/* Eye + Beam Group (Synced) */}
          <g className="eye-scanner-group" transform="translate(38, 36)">
            {/* Eye Light */}
            <circle r="3" fill="#A78BFA" className="robot-eye" />

            {/* Scanning Beam (overlaying) */}
            <g className="robot-beam">
              <path
                d="M0 0 L400 -120 L400 120 Z"
                fill="url(#scanning-gradient)"
                className="opacity-40"
              />
            </g>
          </g>

          {/* Body */}
          <rect
            x="25"
            y="58"
            width="50"
            height="45"
            rx="15"
            fill="#1F2937"
            stroke="#6366F1"
            strokeWidth="2"
          />

          {/* Energy Core */}
          <circle cx="50" cy="80" r="8" fill="#8B5CF6" className="robot-core" />
          <circle cx="50" cy="80" r="4" fill="#DDD6FE" />

          {/* Arms */}
          <rect
            x="15"
            y="65"
            width="8"
            height="25"
            rx="4"
            fill="#374151"
            stroke="#6366F1"
            strokeWidth="1"
            transform="rotate(-15 15 65)"
          />
          <rect
            x="77"
            y="65"
            width="8"
            height="25"
            rx="4"
            fill="#374151"
            stroke="#6366F1"
            strokeWidth="1"
            transform="rotate(15 77 65)"
          />

          {/* Antennas */}
          <line
            x1="40"
            y1="20"
            x2="35"
            y2="10"
            stroke="#6366F1"
            strokeWidth="2"
          />
          <circle cx="35" cy="10" r="2" fill="#8B5CF6" />

          <line
            x1="60"
            y1="20"
            x2="65"
            y2="10"
            stroke="#6366F1"
            strokeWidth="2"
          />
          <circle cx="65" cy="10" r="2" fill="#8B5CF6" />
        </g>
      </svg>
    </div>
  );
};

export default Robot;
