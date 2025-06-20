import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function projectsAnimations() {
  gsap.from(".project-item-right", {
    x: 300,
    duration: 0.6,
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
      trigger: ".project-item",
      scroller: "body",
      start: "top 90%",
      scrub: 2,
    },
  });

  gsap.from(".project-item-left", {
    x: -300,
    duration: 0.6,
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
      trigger: ".project-item",
      scroller: "body",
      start: "top 90%",
      scrub: 2,
    },
  });
}
