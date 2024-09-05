import { motion } from "framer-motion";
import { projects as datas } from "../datas/datas";

const variants = (x: number) => ({
  hidden: {
    opacity: 0,
    x: x,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
    x: 0,
  },
});

const Projects = () => {
  return (
    <div className="w-full mt-16 flex justify-center flex-col items-center pb-10">
      <motion.h2
        className="font-medium text-4xl text-neutral-50 font-Inter text-center pb-12"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
      >
        Projects
      </motion.h2>
      <div className="card-wrap lg:w-[55rem] w-full mt-5 flex flex-col gap-11 px-5 max-sm:justify-center max-sm:items-center">
        {datas.map((data) => {
          return (
            <div className="w-full flex img lg:items-start gap-20 max-sm:gap-14 max-sm:flex-col  items-center pl-10 max-sm:pl-0">
              <motion.img
                src={data.image}
                alt=""
                className="w-[10rem] max-sm:scale-125 rounded-lg"
                variants={variants(-100)}
                initial="hidden"
                whileInView={"visible"}
              />
              <motion.div
                className="flex desc flex-col ml-11 text-neutral-300 font-Inter mt-2 max-sm:mt-0 justify-self-center max-sm:w-full max-sm:ml-0 max-sm:px-2"
                variants={variants(200)}
                initial="hidden"
                whileInView={"visible"}
              >
                <h2 className="judul font-medium text-lg max-sm:text-center max-sm:text-2xl">
                  {data.project_name}
                </h2>
                <p className="text-sm max-w-[31rem] mt-2 text-slate-400 font-light ">
                  {data.description}
                </p>
                <div className="flex w-full mt-3 gap-4 flex-wrap">
                  {data.technologies.map((tech) => {
                    return (
                      <div className="py-[0.30rem] px-3 bg-gray-900 rounded-md">
                        <h3 className="text-purple-600 text-sm text-center font-medium">
                          {tech}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
