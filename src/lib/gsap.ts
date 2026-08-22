import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export function createContext(scope: Element | string | object) {
  let ctxRef!: ReturnType<typeof gsap.context>;
  const $ = gsap.utils.selector(scope);
  return {
    run(fn: (self: { $: typeof $ }) => void) {
      ctxRef = gsap.context(() => fn({ $ }), scope);
      return ctxRef;
    },
    get ctx() {
      return ctxRef;
    },
    $,
  };
}
