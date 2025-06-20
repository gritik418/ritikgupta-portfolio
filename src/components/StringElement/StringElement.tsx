import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import stringAnimation from "../../animations/stringAnimation";

const StringElement = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    stringAnimation({ containerRef, pathRef });
  });

  return (
    <div className="flex items-center justify-center">
      <div ref={containerRef} className="container">
        <svg
          width="100%"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 0 50 Q 50 50 100 50"
            stroke="#c4b4ff"
            stroke-width="1px"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default StringElement;
