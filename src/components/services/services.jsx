import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UX/UI Design</h2>
          <p>
           Crafting intuitive and aesthetically pleasing digital experiences that seamlessly blend form and function, reflecting a deep understanding of user needs and behaviors.
          </p>
          <div></div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Project Management</h2>
          <p>
          Expertly blending methodology with creativity, I excel in guiding diverse teams to deliver complex projects on time and within budget, ensuring client satisfaction and business growth.
          </p>
          <div></div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          Crafting intuitive and dynamic user experiences through innovative web development, blending cutting-edge technologies with creative design to bring ideas to life.
          </p>
          <div></div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile App Development</h2>
          <p>
          Specializing in intuitive and user-friendly mobile app development, I blend innovative design with efficient coding to create engaging experiences that seamlessly connect users with technology.
          </p>
          <div></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;