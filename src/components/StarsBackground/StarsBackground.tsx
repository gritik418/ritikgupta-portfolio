import { useEffect, useRef } from "react";

const StarsBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let mouse = { x: -1000, y: -1000 };

        // Configuration
        const STAR_COUNT = 150; // Number of stars
        const CONNECTION_DISTANCE = 150; // Distance to connect/react
        const MOUSE_RADIUS = 200; // Interaction radius

        class Star {
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
            originalVx: number;
            originalVy: number;
            friction: number;
            color: string;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.size = Math.random() * 2;
                
                // Base movement (Right to Left drift)
                this.originalVx = -(Math.random() * 0.5 + 0.1); 
                this.originalVy = (Math.random() - 0.5) * 0.2; // Slight vertical drift
                
                this.vx = this.originalVx;
                this.vy = this.originalVy;
                this.friction = 0.95; // For returning to original speed
                this.color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update(width: number, height: number) {
                // Determine interaction with mouse
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < MOUSE_RADIUS) {
                    // Calculate repulsion angle
                    const angle = Math.atan2(dy, dx);
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
                    
                    // Apply force
                    const pushX = Math.cos(angle) * force * 2;
                    const pushY = Math.sin(angle) * force * 2;
                    
                    this.vx += pushX;
                    this.vy += pushY;
                }

                // Apply velocity
                this.x += this.vx;
                this.y += this.vy;

                // Friction/Return to normal speed
                this.vx = this.vx * this.friction + this.originalVx * (1 - this.friction);
                this.vy = this.vy * this.friction + this.originalVy * (1 - this.friction);

                // Wrap around screen
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                this.draw();
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push(new Star(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.update(canvas.width, canvas.height);
            });

            // Draw connections near mouse
            stars.forEach((star) => {
                const dx = star.x - mouse.x;
                const dy = star.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CONNECTION_DISTANCE) {
                    ctx.beginPath();
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    const opacity = 1 - distance / CONNECTION_DISTANCE;
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Violet connection
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        // Initialize
        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black"
        />
    );
};

export default StarsBackground;
