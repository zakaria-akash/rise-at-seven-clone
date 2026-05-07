import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export async function getGsap() {
  return gsap;
}

export { gsap, ScrollTrigger };
export default gsap;
