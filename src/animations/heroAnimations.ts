import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function heroAnimations() {
    // 1. Initial Intro Animation
    const introTl = gsap.timeline();
    
    introTl.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
    })
    .to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8")
    .to(".scroll-indicator", {
        opacity: 1,
        duration: 1
    }, "-=0.5");

    // 2. Scroll-driven Project Reveal
    const scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5, // Smooth scrubbing
            pin: true,  // Pin the container
        }
    });

    // Fade out main text
    scrollTl.to(".hero-text-wrapper", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
    });

    // Reveal Project 1
    scrollTl.to(".project-1", {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 3,
        ease: "power2.out"
    }, "-=1");

    // Reveal Project 2
    scrollTl.to(".project-1", {
        opacity: 0.5,
        scale: 0.9,
        y: -100,
        duration: 2
    }, "+=1");
    
    scrollTl.to(".project-2", {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 3,
        ease: "power2.out"
    }, "-=2");

    // Reveal Project 3
    scrollTl.to(".project-2", {
        opacity: 0.5,
        scale: 0.9,
        y: -100,
        duration: 2
    }, "+=1");

    scrollTl.to(".project-3", {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 3,
        ease: "power2.out"
    }, "-=2");

    // Final cluster lift
    scrollTl.to(".project-preview", {
        y: -200,
        opacity: 0,
        stagger: 0.1,
        duration: 3
    }, "+=1");
}
