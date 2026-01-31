import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function projectsAnimations() {
  const projectItems = gsap.utils.toArray(".project-item");

  projectItems.forEach((item: any) => {
    const imageContainer = item.querySelector(".relative.overflow-hidden");
    const image = item.querySelector("img");
    const textContent = item.querySelector(".w-full.md\\:w-\\[40\\%\\]");
    const subtitle = textContent?.querySelector("span");
    const title = textContent?.querySelector("h4");
    const description = textContent?.querySelector("p");
    const tags = textContent?.querySelectorAll("span.text-xs");
    const links = textContent?.querySelectorAll("a");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    // Image Reveal
    if (imageContainer && image) {
        tl.from(imageContainer, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut"
        });
        
        tl.from(image, {
            scale: 1.2,
            duration: 1.5,
            ease: "power2.out"
        }, "-=1.2");
    }

    // Text Content Reveal
    if (textContent) {
        const textTl = gsap.timeline();
        
        if (subtitle) textTl.from(subtitle, { opacity: 0, x: -20, duration: 0.6 });
        if (title) textTl.from(title, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");
        if (description) textTl.from(description, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");
        if (tags) textTl.from(tags, { opacity: 0, scale: 0.8, stagger: 0.05, duration: 0.4 }, "-=0.4");
        if (links) textTl.from(links, { opacity: 0, y: 10, stagger: 0.1, duration: 0.4 }, "-=0.2");

        tl.add(textTl, "-=1");
    }
  });
}
