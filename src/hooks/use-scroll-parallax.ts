import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxConfig = {
  speed?: number; // 0 = no parallax, 0.5 = half scroll speed, 1 = normal
  offset?: { start: number; end: number }; // scroll range in px
};

export function useScrollParallax(config: ParallaxConfig = {}) {
  const { speed = 0.3, offset = { start: 0, end: 800 } } = config;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [offset.start, offset.end],
    [0, (offset.end - offset.start) * speed],
  );

  return { ref, y };
}

export function useScrollOpacity(config: { start?: number; end?: number } = {}) {
  const { start = 0, end = 400 } = config;
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [start, end], [0, 1]);

  return { opacity };
}

