import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="skills"
      className="pt-10 pb-24"
    >
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-blue">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <h3 className="mt-10 mb-7 [word-spacing:10px]">
            HTML CSS JAVASCRIPT REACT VUE TAILWIND FRAMER-MOTION GITHUB NODEJS
            EXPRESS MONGODB REACT-NATIVE FIREBASE SUPABASE
          </h3>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                className="z-10 "
                src="assets/skills-image.png"
                alt="skills"
              />
            </div>
          ) : (
            <img
              className="z-10 "
              src="assets/skills-image.png"
              alt="skills"
            />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* COLLABORATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl"></p>
              <p className="font-playfair font-semibold text-3xl pt-7">
                Collaborative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              Experienced in working with multidisciplinary teams and other
              agencies.
            </p>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl"></p>
              <p className="font-playfair font-semibold text-3xl pt-7">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              Acquire new skills and knowledge to remain at the forefront of web
              development innovation.
            </p>
          </div>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl"></p>
              <p className="font-playfair font-semibold text-3xl pt-7">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              Approach problems with a fresh perspective to create simple
              solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
