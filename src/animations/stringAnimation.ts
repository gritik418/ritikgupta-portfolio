import type React from "react";

type ParamType = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  pathRef: React.RefObject<SVGPathElement | null>;
};

export default function stringAnimation({ containerRef, pathRef }: ParamType) {
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
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(path, {
      attr: { d: "M 0 50 Q 50 50 100 50" },
      duration: 0.5,
      overwrite: "auto",
      ease: "elastic.out(1, 0.3)",
    });
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
}
