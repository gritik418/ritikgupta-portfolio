import gsap from "gsap";

export default function heroAnimations() {
  gsap.from(".hero h1,.hero p, .hero a", {
    x: -300,
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
    stagger: 0.1,
  });

  gsap.from(".hero img", {
    x: 300,
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
  });
}
