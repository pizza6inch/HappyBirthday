import { motion } from "framer-motion";
import { useState } from "react";
import useDeviceType from "../hooks/useDeviceType";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css"; // 适用于 Swiper v9 和更高版本
import { Tilt } from "react-tilt";

import photo1 from "/public/photos/photo1.jpg";
import photo2 from "/public/photos/photo2.jpg";
import photo3 from "/public/photos/photo3.jpg";
import photo4 from "/public/photos/photo4.jpg";
import photo5 from "/public/photos/photo5.jpg";
import photo6 from "/public/photos/photo6.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const Photo = ({
  src,
  delay = 0,
  handleHovered,
  handleUnhovered,
}: {
  src: string;
  delay?: number;
  handleHovered: () => void;
  handleUnhovered: () => void;
}) => {
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
        onHoverStart={handleHovered}
        onHoverEnd={handleUnhovered}
        src={src}
        className=" w-[500px] rounded-lg"
      />
    </Tilt>
  );
};

const Gallery = () => {
  const device = useDeviceType();
  const [showRoast, setShowRoast] = useState(false);

  const handleHovered = () => {
    setShowRoast(true);
  };
  const handleUnhovered = () => {
    setShowRoast(false);
  };

  return (
    <section id="gallery" className=" pt-4 px-8 flex flex-col items-center relative">
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
      {device === "desktop" && (
        <>
          <div className=" grid grid-cols-2 my-16 gap-40 ">
            {photos.map((photo, index) => (
              <Photo
                key={index}
                src={photo}
                delay={index % 2 === 0 ? 0.5 : 0}
                handleHovered={handleHovered}
                handleUnhovered={handleUnhovered}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showRoast ? 1 : 0 }}
            transition={{ duration: 0.5 }} // For smoother animation
            className="absolute bottom-[400px] right-[500px] text-2xl text-[#103362] font-enFont font-bold"
          >
            {"頭髮也想當主角 X)"}
          </motion.div>
        </>
      )}
      {device === "mobile" && (
        <div className=" relative w-full">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-bounce-horizontal">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 15h20m0 0l-5-5m5 5l-5 5" />
            </svg>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={true}
            autoplay={{ delay: 3000 }}
            className="my-16 w-full rounded-lg relative"
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <img src={photo} alt={`photo${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Gallery;
