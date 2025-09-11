import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../styles";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-10">
      {/* Section Heading */}
      <motion.div
        className="text-left ml-20 mt-15 mb-10"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Tools & Frameworks</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Center-aligned Skills Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-4 w-72 bg-white/10 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20">
                <BallCanvas icon={tech.icon} />
              </div>

              {/* Skill Info */}
              <div className="flex-1">
                <p className="font-semibold mb-1">{tech.name}</p>
                <p className="text-sm text-gray-700">
                  {tech.level} ({tech.percentage})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
