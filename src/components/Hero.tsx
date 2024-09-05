import img from "../assets/a.jpg";
import { motion } from "framer-motion";

const heroDesc = (delay: number) => ({
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, x: -300 },
});

const Hero = () => {
  return (
    <div className="flex w-full flex-wrap lg:mt-20 lg:justify-center lg:items-center text-neutral-100 px-20 lg:flex-row flex-col relative pb-9 max-sm:pb-2 max-sm:px-5 max-sm:mt-10 max-lg:mt-16">
      <motion.div className="lg:w-1/2 w-full flex flex-col lg:justify-normal lg:items-start">
        <motion.h1
          className="font-light text-5xl pb-9 max-sm:mt-5 max-sm:pb-2 max-lg:pb-3 max-lg:text-center max-sm:text-start"
          variants={heroDesc(0)}
          initial="hidden"
          animate="visible"
        >
          Farhan Fachrezzi
        </motion.h1>
        <motion.span
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-blue-700 to-purple-700 text-3xl font-normal max-sm:text-2xl max-lg:text-3xl max-lg:text-center max-sm:text-start  max-sm:px-3"
          variants={heroDesc(0.3)}
          initial="hidden"
          animate="visible"
        >
          Front End Developer
        </motion.span>
        <motion.p
          className="lg:w-[80%] lg:text-start mt-6 max-sm:mt-3 text-slate-300 max-sm:text-xs  max-lg:text-center max-lg:font-normal max-sm:text-start max-sm:px-3"
          variants={heroDesc(0.6)}
          initial="hidden"
          animate="visible"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia
          reiciendis minima enim, eligendi ex natus odit nesciunt cupiditate
          repellat illo sapiente incidunt earum iusto officiis nulla recusandae
          modi consequatur, quibusdam sunt excepturi voluptate, aliquid rerum.
          Repellat asperiores quibusdam eveniet sint, quis impedit inventore
          earum expedita? Provident dolorum unde soluta?
        </motion.p>
      </motion.div>
      <motion.div className="lg:w-1/2 w-full flex justify-center h-[350px] max-lg:mt-14 max-sm:mt-0 max-lg:justify-center max-lg:items-center ">
        <motion.img
          src={img}
          alt=""
          className="w-[300px] h-[300px] rounded-full"
          initial={{ x: 300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring", stiffness: 100 },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
