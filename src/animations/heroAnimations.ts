import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function heroAnimations() {
    // 1. Initial Intro Animation
    const introTl = gsap.timeline();
    
    introTl.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "expo.out",
        delay: 0.5
    })
    .to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out"
    }, "-=1.2")
    .to(".scroll-indicator", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
    }, "-=1");

    // 2. Scroll-driven Scene
    const scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
        }
    });

    // Parallax background effect
    gsap.to(".hero-container", {
        scrollTrigger: {
            trigger: ".hero-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    // Fade and Scale out Title
    scrollTl.to(".hero-text-wrapper", {
        scale: 0.85,
        opacity: 0,
        y: -50,
        duration: 4,
        ease: "power2.inOut"
    });
}
