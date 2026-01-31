import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function heroAnimations() {
    // 1. Initial Intro Animation
    const introTl = gsap.timeline();
    
    introTl.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
    })
    .to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    }, "-=1")
    .to(".scroll-indicator", {
        opacity: 1,
        duration: 1
    }, "-=0.8");

    // 2. Scroll-driven Project Reveal
    const scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
            pin: true,
        }
    });

    // Fade and Scale out Title
    scrollTl.to(".hero-text-wrapper", {
        scale: 0.7,
        opacity: 0,
        y: -100,
        duration: 4,
        ease: "power2.inOut"
    });

    // Reveal Project 1
    scrollTl.to(".project-1", {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 5,
        ease: "power2.out"
    }, "-=2.5");

    // Exit Project 1 & Reveal Project 2
    scrollTl.to(".project-1", {
        opacity: 0,
        scale: 1.1,
        y: -150,
        duration: 4
    }, "+=1");
    
    scrollTl.to(".project-2", {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 5,
        ease: "power2.out"
    }, "-=4");

    // Exit Project 2 & Reveal Project 3
    scrollTl.to(".project-2", {
        opacity: 0,
        scale: 1.1,
        y: -150,
        duration: 4
    }, "+=1");

    scrollTl.to(".project-3", {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 5,
        ease: "power2.out"
    }, "-=4");

    // Final Fade
    scrollTl.to(".project-3", {
        opacity: 0,
        scale: 0.9,
        duration: 3
    }, "+=1");
}
