import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const StringElement = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const percentX = ((e.clientX - rect.left) / rect.width) * 100;
      const percentY = ((e.clientY - rect.top) / rect.height) * 100;

      const d = `M 0 50 Q ${percentX.toFixed(2)} ${percentY.toFixed(2)} 100 50`;

      gsap.to(path, {
        attr: { d },
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: "M 0 50 Q 50 50 100 50" },
        duration: 1.2,
        overwrite: "auto",
        ease: "elastic.out(1.2, 0.4)",
      });
    };
    
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div className="!py-0 opacity-30 select-none flex items-center justify-center">
      <div ref={containerRef} className="max-w-7xl w-full mx-auto px-6 h-[100px] cursor-pointer">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none"
        >
          <path
            ref={pathRef}
            d="M 0 50 Q 50 50 100 50"
            stroke="white"
            strokeWidth="0.9"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default StringElement;
