import React from "react";
import { motion } from "framer-motion";

const InputCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-2"
  >
    {children}
  </motion.div>
);

export default InputCard;
