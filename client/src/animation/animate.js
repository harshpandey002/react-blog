export const container = {
  hidden: {
    y: 10,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.25,
      type: "spring",
      bounce: 0.6,
    },
  },
};

export const parent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const blogCard = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    y: -5,
  },
};
