import { motion } from "framer-motion";

function StaggerParent({ children }: { children: React.ReactNode }) {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="w-full"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default StaggerParent;
