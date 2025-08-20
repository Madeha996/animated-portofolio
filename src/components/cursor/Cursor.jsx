import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const xSmall = useMotionValue(0);
  const ySmall = useMotionValue(0);

  const xLarge = useSpring(xSmall, { stiffness: 200, damping: 30 });
  const yLarge = useSpring(ySmall, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      xSmall.set(e.clientX);
      ySmall.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [xSmall, ySmall]);

  return (
    <div className="cursor">
      <motion.div className="circle small" style={{ x: xSmall, y: ySmall }} />
      <motion.div className="circle large" style={{ x: xLarge, y: yLarge }} />
    </div>
  );
};

export default Cursor;
