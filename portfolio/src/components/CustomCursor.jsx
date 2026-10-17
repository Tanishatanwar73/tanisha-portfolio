import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "motion/react";

function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 500, damping: 38, mass: 0.35 });
  const smoothY = useSpring(cursorY, { stiffness: 500, damping: 38, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointerSupport = () => setIsEnabled(finePointer.matches);
    const followPointer = (event) => {
      cursorX.set(event.clientX - 10);
      cursorY.set(event.clientY - 10);
      setHasMoved(true);
    };

    updatePointerSupport();
    finePointer.addEventListener("change", updatePointerSupport);
    window.addEventListener("pointermove", followPointer);

    return () => {
      finePointer.removeEventListener("change", updatePointerSupport);
      window.removeEventListener("pointermove", followPointer);
    };
  }, [cursorX, cursorY]);

  if (!isEnabled || !hasMoved) return null;

  return createPortal(
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      style={{ x: smoothX, y: smoothY }}
    />,
    document.body
  );
}

export default CustomCursor;
