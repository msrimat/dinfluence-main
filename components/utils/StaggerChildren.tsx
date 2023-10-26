import { motion } from "framer-motion";

function StaggerChildren({ children }: { children: React.ReactNode }) {
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="w-full" variants={item}>
      {children}
    </motion.div>
  );
}

export default StaggerChildren;
