import React from "react";
import Forground from "./Forground";
import { motion } from "framer-motion";

const Background = () => (
  <div className="w-full h-screen fixed z-0 bg-gradient-to-b from-neutral-100 to-neutral-50">
    <Forground />
    <h1 className=" text-[2vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-x-[50%] font-semibold text-zinc-300 ">
      <ul>
        <li>C-Cat air 100</li>
        <li>Bhai porn mat dekh, life phele lund hai tere.</li>
        <li>Thoda focus kro, thoda focus kro.</li>
        <li>Mom have hope in you.</li>
        <li>Think of netu</li>
      </ul>
    </h1>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 items-center">
      {[
        { src: "/Dariya_Profile.jpg", alt: "Dariya" },
        { src: "/Kamla_Profile.jpg", alt: "Kamla" },
        { src: "/Sujaram_Profile.jpg", alt: "Sujaram" },
        { src: "/netu.png", alt: "Netu" },
      ].map((item, index) => (
        <motion.img
          key={index}
          initial={{
            x: -(index - 1.5) * 104, // Start at center
            y: 50, // Start slightly lower
            rotate: (index % 2 === 0 ? 10 : -10) * (index + 1), // Random-ish rotation
            scale: 0.5, // Start small
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12, // Bouncy
            mass: 0.8,
            delay: 0.5 + index * 0.1, // Staggered release
          }}
          whileHover={{ scale: 1.2, rotate: 5, zIndex: 10 }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.2}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg cursor-pointer"
          src={item.src}
          alt={item.alt}
          title={item.alt}
        />
      ))}
    </div>
  </div>
);

export default Background;
