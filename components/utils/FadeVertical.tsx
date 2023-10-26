import { motion } from "framer-motion";

function FadeVertical({
  children,
  y,
}: {
  children: React.ReactNode;
  y: number;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FadeVertical;
