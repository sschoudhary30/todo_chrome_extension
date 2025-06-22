import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

const priorityColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const TodoCard = ({ data, onDelete, onToggle }) => (
  <motion.div
    layout
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="relative p-4 bg-white rounded-2xl shadow-md hover:shadow-lg"
  >
    <div className="flex justify-between items-center">
      <span
        className={`px-2 py-1 rounded-full text-sm font-semibold ${
          priorityColors[data.priority]
        }`}
      >
        {data.priority.charAt(0).toUpperCase() + data.priority.slice(1)}
      </span>
      <IoCloseCircle
        size="1.25em"
        className="cursor-pointer text-neutral-500 hover:text-neutral-700"
        onClick={onDelete}
      />
    </div>
    <div className="mt-4 flex items-start">
      <input
        type="checkbox"
        checked={data.done}
        onChange={onToggle}
        className="mr-3 w-5 h-5 rounded border-neutral-300 focus:ring-neutral-500"
      />
      <p
        className={`flex-1 text-base ${
          data.done ? "line-through text-neutral-400" : ""
        }`}
      >
        {data.text}
      </p>
    </div>
  </motion.div>
);

export default TodoCard;
