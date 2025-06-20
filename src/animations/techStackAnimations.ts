import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function techStackAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".techItem",
      scroller: "body",
      start: "top 100%",
      scrub: 2,
    },
  });

  tl.from(".techItem", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
  });
}
