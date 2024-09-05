import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="mt-14 w-full pb-11 ">
      <motion.h2
        className="text-neutral-200 text-center text-4xl font-medium font-Inter"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      >
        Technologies
      </motion.h2>
      <motion.div
        className="container flex justify-center mt-16 gap-6 flex-wrap pb-10"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <motion.div
          className="border-2 rounded-xl w-[100px] h-[100px] border-gray-700 flex justify-center items-center  "
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 2.6,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaReact className="text-blue-500" size={60} />
        </motion.div>

        <motion.div
          className="border-2 rounded-xl w-[100px] h-[100px] border-gray-700 flex justify-center items-center"
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaLaravel className="text-red-700" size={60} />
        </motion.div>

        <motion.div
          className="border-2 rounded-xl w-[100px] h-[100px] border-gray-700 flex justify-center items-center"
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 3.6,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <RiTailwindCssFill className="text-blue-400" size={60} />
        </motion.div>

        <motion.div
          className="border-2 rounded-xl w-[100px] h-[100px] border-gray-700 flex justify-center items-center"
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <SiMysql className="text-blue-400 mb-2" size={60} />
        </motion.div>
      </motion.div>
      <motion.div
        className="border-b mt-20 w-[91%] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      ></motion.div>
    </div>
  );
};

export default Technologies;
