import React, { useRef, useEffect, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  transition?: object;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  style,
  transition = { duration: 0.6 }
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={fadeVariant}
      initial="hidden"
      animate={controls}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;