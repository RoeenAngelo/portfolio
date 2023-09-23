import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link }) => {
  const projectTitle = title.toLowerCase().split(" ").join("-");
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div
      variants={projectVariant}
      className="relative"
    >
      <a
        href={link}
        target="_blank"
      >
        {" "}
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{subtitle}</p>
        </div>
      </a>
      <img
        src={`../assets/portfolio-projects-pics/${projectTitle}.png`}
        alt=""
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-48 pb-48 h-full"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          {/* <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div> */}
          <Project
            title="Project 1"
            subtitle={"BGA Golf - A website I made for my golf league."}
            link="https://roeenangelo.github.io/vue-bga/"
          />
          <Project
            title="Project 2"
            subtitle={
              "CRUD app that allows clients to order pizza and the owner to edit the menu and authorize user privileges."
            }
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            subtitle={"An Instagram clone"}
          />
          {/* <Project
            title="Project 4"
            subtitle={"Project Subtitle"}
          />
          <Project
            title="Project 5"
            subtitle={"Project Subtitle"}
          /> */}

          {/* ROW 3 */}
          {/* <Project
            title="Project 6"
            subtitle={"Project Subtitle"}
          /> */}
          {/* <Project
            title="Project 7"
            subtitle={"Project Subtitle"}
          /> */}
          {/* <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
