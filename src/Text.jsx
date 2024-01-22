import { motion } from "framer-motion";
function Text() {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ scale: 0.5, opacity: 0.5 }}
        //   animate={{ rotate: 180, scale: 1, opacity:1 }}
        whileInView={{ opacity: 1, scale: 2 }}
        transition={{
          duration: 2,
        }}
        drag
      />
    </div>
  );
}

export default Text;
