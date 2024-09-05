import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
const Navbar = () => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className="h-[90px] w-full text-white">
      <div className="h-[90px]  items-center w-full flex justify-between px-16">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="name"
        >
          <motion.h1
            variants={variants}
            className="text-3xl font-light font-Inter"
          >
            Frhn.
          </motion.h1>
        </motion.div>
        <motion.div
          className="socials flex gap-3"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={variants}>
            <FaLinkedin
              size={23}
              className="cursor-pointer hover:text-blue-600 "
            />
          </motion.div>
          <motion.div variants={variants}>
            <FaGithub
              size={22}
              className="cursor-pointer hover:text-slate-600"
            />
          </motion.div>
          <motion.div variants={variants}>
            <LuInstagram
              size={22}
              className="cursor-pointer hover:text-pink-500"
            />
          </motion.div>
          <motion.div variants={variants}>
            <FaSquareXTwitter
              size={22}
              className="cursor-pointer hover:text-blue-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
