import gsap from "gsap";

export default function techStackAnimations() {
  gsap.from(".techItem", {
    x: -60,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".techItem",
      scroller: "body",
      start: "top 85%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
