import { motion } from "framer-motion";

export const PageAnimation = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
  exit: { y: 300, opacity: 0, transition: { duration: 1 } },
  hide: { y: 300, opacity: 0 },
};

export const titleAnim = {
  hide: { y: 200, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const fade = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const imgAnim = {
  hide: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const lineAnim = {
  hide: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const slider = {
  hide: { skew: "45deg", x: "-130%" },
  show: {
    skew: "0deg",
    x: "100%",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const scrollReveal = {
  hide: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
