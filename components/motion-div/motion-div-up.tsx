import React from "react";
import { motion as m } from "framer-motion";

interface MotionDivUpProps {
  delay: number;
  duration: number;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MotionDivUp: React.FC<MotionDivUpProps> = ({
  delay,
  duration,
  children,
  className,
  onClick,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
      }}
      exit={{ opacity: 0, y: 20 }}
      className={className}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </m.div>
  );
};

export default MotionDivUp;
