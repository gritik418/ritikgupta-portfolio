import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function techStackAnimations() {
  gsap.from(".techItem", {
    x: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".techItem",
      scroller: "body",
      start: "top 70%",
    },
  });
}
