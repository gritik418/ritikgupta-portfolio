import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function projectsAnimations() {
  gsap.utils.toArray(".project-item").forEach((item: any) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "top 50%",
        scrub: true,
      },
    });
  });
}
