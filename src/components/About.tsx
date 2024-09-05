import image from "../assets/b.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="mt-32 max-sm:mt-20 w-full flex flex-col">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        className="text-neutral-200 font-medium font-inter text-4xl text-center"
      >
        About <span className="text-gray-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap w-full  mt-10 px-6">
        <div className="image-cont lg:w-1/2 w-full flex justify-center">
          <motion.img
            src={image}
            className="w-[355px] h-[400px] rounded-lg lg:ml-7 shadow-sm shadow-white max-sm:scale-90"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 1, stiffness: 80 },
            }}
          />
        </div>
        <div className="w-full desc lg:w-1/2 ">
          <motion.p
            className="text-neutral-200 lg:w-[70%] lg:mt-4 max-sm:px-3 max-sm:text-sm max-lg:mt-14 max-sm:mt-4 max-lg:text-center max-sm:text-start max-lg:px-16"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            ipsum laborum ullam delectus dignissimos, officia modi? Facere
            aspernatur molestias quibusdam deserunt officia minima praesentium
            voluptates eius suscipit non laborum, autem iste, quia enim. Vel
            cupiditate itaque alias maxime aperiam fugiat suscipit voluptatum
            neque impedit, nesciunt eius beatae quisquam in aut quis nulla
            possimus dicta, repellendus maiores aspernatur animi molestias
            accusamus. Libero, harum, hic dicta numquam totam labore modi
            perspiciatis quidem, consequatur vero ipsam dolor dolore voluptatem?
            Iste eveniet beatae officia!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
