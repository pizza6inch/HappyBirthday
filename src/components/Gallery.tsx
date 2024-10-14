import { motion } from "framer-motion";
import useDeviceType from "../hooks/useDeviceType";

import { Tilt } from "react-tilt";
import photo1 from "/public/photos/photo1.jpg";
import photo2 from "/public/photos/photo2.jpg";
import photo3 from "/public/photos/photo3.jpg";
import photo4 from "/public/photos/photo4.jpg";

const Photo = ({ src, delay = 0 }: { src: string; delay?: number }) => {
  return (
    <Tilt>
      <motion.img
        initial={{ opacity: 0, x: -200, y: 100, rotate: -10 }}
        whileInView={{ opacity: 0.5, x: 0, y: 0, rotate: -10, transition: { duration: 1, delay: delay } }}
        whileHover={{
          scale: 1.2,
          rotate: 0,
          opacity: 1,
          transition: { duration: 0.5 }, // whileHover 没有延迟
          cursor: "pointer",
        }}
        src={src}
        className=" w-[300px] rounded-lg"
      />
    </Tilt>
  );
};

const Gallery = () => {
  return (
    <div className="bg-gradient-to-br from-[#F7E4DF] to-[#F0C2B2] pt-4 px-8 flex flex-col items-center relative">
      {/* 裝飾元素 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gray-400 opacity-10 rounded-full" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#F7C1BF] opacity-30 rounded-full" />
        <div className="absolute top-1/3 right-0 w-20 h-20 bg-[#D1A3A3] opacity-30 rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-[#F0C2B2] opacity-30 rounded-full" />
        <div className="absolute bottom-[60px] right-0 w-16 h-16 bg-[#D1A3A3] opacity-30 rounded-full" />
      </div>
      {/* 裝飾元素 */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#103362] font-bold text-[40px] text-center font-enFont"
      >
        Memories
      </motion.h2>
      <div className=" grid grid-cols-2 my-16 gap-40 ">
        <Photo src={photo3} />
        <Photo src={photo1} delay={0.5} />
        <Photo src={photo2} />
        <Photo src={photo4} delay={0.5} />
      </div>
    </div>
  );
};

export default Gallery;
