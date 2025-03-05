import { AnimatePresence, motion } from "framer-motion";

interface TransitionWrapperProps {
  children: React.ReactNode;
  keyToAnimate?: string;
  direction?: "top" | "bottom";
}

export default function TransitionWrapper({
  children,
  keyToAnimate = "pageTransitionWrapper",
  direction = "top",
}: TransitionWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyToAnimate}
        initial={{ opacity: 0, y: direction === "top" ? 5 : -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
