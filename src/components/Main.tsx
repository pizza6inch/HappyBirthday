import React from "react";
import main from "/public/photos/main.jpg";

import { motion } from "framer-motion";
import hat1 from "/public/hats/hat1.png";
import hat2 from "/public/hats/hat2.png";
import hat3 from "/public/hats/hat3.png";
import hat4 from "/public/hats/hat4.png";
import hat5 from "/public/hats/hat5.png";
import hat6 from "/public/hats/hat6.png";
import hat7 from "/public/hats/hat7.png";

import useDeviceType from "../hooks/UseDeviceType";

type HatType = {
  src: string;
  offset: { x: number; y: number };
  rotate: number;
};

const Hat = ({ hat }: { hat: HatType }) => {
  const device: "mobile" | "desktop" = useDeviceType();
  return (
    hat?.src && (
      <div className=" absolute top-0 -translate-x-1/2 left-[50%] transform lg:w-1/5">
        <motion.img
          key={hat.src}
          initial={{
            opacity: 0,
            y: -100 + hat.offset.y,
            x: hat.offset.x,
            rotate: hat.rotate,
          }}
          animate={{
            opacity: 1,
            y: hat.offset.y + (device === "mobile" ? 0 : -20),
            x: hat.offset.x,
            rotate: hat.rotate,
          }}
          src={hat.src}
        />
      </div>
    )
  );
};

const Main = () => {
  const HATS = [
    { src: hat1, offset: { x: 10, y: 10 }, rotate: 0 },
    { src: hat2, offset: { x: 50, y: 20 }, rotate: 0 },
    { src: hat3, offset: { x: 50, y: 20 }, rotate: 0 },
    { src: hat4, offset: { x: 25, y: 20 }, rotate: 0 },
    { src: hat5, offset: { x: 10, y: 0 }, rotate: 0 },
    { src: hat6, offset: { x: 35, y: 20 }, rotate: 0 },
    { src: hat7, offset: { x: 20, y: 0 }, rotate: 0 },
  ];
  const [hat, setHat] = React.useState<HatType>(HATS[0]);

  const changeHat = (hat: HatType) => {
    setHat(hat);
  };
  return (
    <div className=" w-full  flex　flex-col justify-center items-center relative px-6">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gray-400 opacity-10 rounded-full" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#F7C1BF] opacity-30 rounded-full" />
        <div className="absolute top-1/3 right-0 w-20 h-20 bg-[#D1A3A3] opacity-30 rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-[#F0C2B2] opacity-30 rounded-full" />
        <div className="absolute bottom-[60px] right-0 w-16 h-16 bg-[#D1A3A3] opacity-30 rounded-full" />
      </div>
      <motion.h2
        className="text-[#103362] font-bold text-[40px] text-center font-enFont"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Pick A Hat!
      </motion.h2>
      {/* <Hat src={hat1} /> */}
      <div className="flex items-center gap-5">
        <div className="relative w-2/3 lg:w-[70%]">
          <Hat hat={hat} />
          <motion.img
            src={main}
            className=" lg:w-1/4 mx-auto mt-[80px] lg:mt-[145px] rounded-xl"
          />
        </div>
        <div className="w-1/3 lg:w-[450px] grid grid-cols-1 lg:grid-cols-3 relative lg:right-[200px]">
          {HATS.map((hat, index) => (
            <motion.img
              initial={{ scale: 0.75 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.8 }}
              src={hat.src}
              key={index}
              className="w-full cursor-pointer"
              onClick={() => changeHat(hat)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
