import { Variants } from "motion/react";

export const heroParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

export const heroChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
} as Variants;

export const aboutArticleParent = { ...heroParent };

export const aboutArticleChild = {
  hidden: { ...heroChild.hidden },
  visible: {
    ...heroChild.visible,
    transition: { duration: 0.3, ease: "easeOut" },
  },
} as Variants;

export const highlightParent = {
  hidden: { ...heroChild.hidden },
  visible: {
    ...heroChild.visible,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const highlightChild = {
  hidden: { ...heroChild.hidden },
  visible: {
    ...heroChild.visible,
    transition: { duration: 0.2, ease: "easeOut" },
  },
} as Variants;

export const techGridParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const techGridChild = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
} as Variants;

export const projectGridParent = { ...techGridParent };
export const projectGridChild = { ...highlightChild };
