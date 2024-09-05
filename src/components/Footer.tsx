import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
const variants = (x: number, delay: number) => ({
  hidden: { x: x, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, delay: delay } },
});
const Footer = () => {
  return (
    <div className="w-full flex flex-col mt-16 h-full  bg-gray-900 items-center pt-[5rem]">
      <div className="flex w-full h-full px-10 flex-wrap">
        <motion.div
          className="lg:w-1/2 w-full flex flex-col gap-3 items-center"
          variants={variants(-200, 0)}
          initial="hidden"
          whileInView="visible"
        >
          {/* icon */}
          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] bg-slate-950 rounded-full flex justify-center items-center">
              <ImLocation2 className="text-neutral-200" size={21} />
            </div>
            <p className="text-neutral-200 w-[16rem] mt-1 font-light">
              Jln.kamajaya no.96 Sukorejo KAB. Pasuruan
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] bg-slate-950 rounded-full flex justify-center items-center">
              <BsFillTelephoneFill className="text-neutral-200" size={18} />
            </div>
            <p className="text-neutral-200 w-[16rem] mb-1 font-light">
              0852 3665 5038
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] bg-slate-950 rounded-full flex justify-center items-center">
              <MdEmail className="text-neutral-200" size={18} />
            </div>
            <p className="text-neutral-200 w-[16rem] mb-1 font-light">
              farhanachmadfachrezzi@gmail.com
            </p>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full flex flex-col h-full items-center max-sm:mt-7"
          variants={variants(200, 0.3)}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-neutral-200 text-4xl font-light  mt-3">
            Get In Touch
          </h3>
          <div className="socials flex gap-6 text-neutral-200 mt-8 ml-2">
            <FaLinkedin
              size={31}
              className="cursor-pointer hover:text-blue-600 "
            />
            <FaGithub
              size={30}
              className="cursor-pointer hover:text-slate-600"
            />
            <LuInstagram
              size={30}
              className="cursor-pointer hover:text-pink-500"
            />
            <FaSquareXTwitter
              size={30}
              className="cursor-pointer hover:text-blue-500"
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[50px] bg-slate-950 mt-14 flex justify-center items-center">
        <p className="text-center text-neutral-200">Copyright 2024.</p>
      </div>
    </div>
  );
};

export default Footer;
