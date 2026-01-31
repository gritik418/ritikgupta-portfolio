import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function techStackAnimations() {
  const categories = gsap.utils.toArray("#techStack .group");

  categories.forEach((category: any) => {
    const title = category.querySelector("h3");
    const icons = category.querySelectorAll(".group\\/icon");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: category,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    if (title) {
        tl.from(title, {
            opacity: 0,
            x: -20,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    tl.from(icons, {
      opacity: 0,
      y: 20,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out(1.7)"
    }, "-=0.4");
  });
}
