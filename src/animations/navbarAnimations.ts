import gsap from "gsap";

export default function navbarAnimations() {
  gsap.from("nav img,nav ul li", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.1,
  });
}
