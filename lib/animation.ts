export const fadeId = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        // type: "tween",
        duration: 1.2,
        delay,
        // ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const animateContainer = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const animateItems = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};
