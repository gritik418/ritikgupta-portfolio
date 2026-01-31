import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const StarsBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const layers = [
            { count: 80, size: 1, speed: 20, opacity: 0.3 },
            { count: 40, size: 2, speed: 40, opacity: 0.5 },
            { count: 10, size: 3, speed: 80, opacity: 0.8 }
        ];

        layers.forEach(layer => {
            for (let i = 0; i < layer.count; i++) {
                const star = document.createElement("div");
                star.className = "absolute bg-white rounded-full pointer-events-none";
                
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                
                star.style.width = `${layer.size}px`;
                star.style.height = `${layer.size}px`;
                star.style.top = `${top}%`;
                star.style.left = `${left}%`;
                star.style.opacity = layer.opacity.toString();
                
                if (layer.size > 1) {
                    star.style.boxShadow = `0 0 ${layer.size * 2}px rgba(255, 255, 255, 0.4)`;
                }
                
                container.appendChild(star);

                const duration = (window.innerWidth + 200) / layer.speed;
                
                gsap.to(star, {
                    x: -window.innerWidth - 200,
                    duration: duration,
                    ease: "none",
                    repeat: -1,
                    onRepeat: () => {
                        gsap.set(star, { x: 100 });
                    }
                }).progress(Math.random());
            }
        });

        return () => {
            if (container) container.innerHTML = '';
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-black"
        />
    );
};

export default StarsBackground;
