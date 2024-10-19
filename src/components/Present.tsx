import { QRCodeSVG } from "qrcode.react";
import present from "/public/present.webp";
import { motion } from "framer-motion";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import useDeviceType from "../hooks/UseDeviceType";

const presentQRCode = import.meta.env.VITE_PRESENT_QRCODE || "error";

const Present = () => {
  const device = useDeviceType();
  return (
    <>
      <Fireworks autorun={{ speed: 3, duration: 5000 }} />
      <motion.h2
        className="text-[#103362] font-bold text-[40px] text-center font-enFont"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Here's your gift！
      </motion.h2>
      <div className=" flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }} // 只在第一次进入视口时触发
            className="text-[#103362] text-center text-[20px] mt-4 font-bold lg:text-[40px]"
          >
            【星巴克】感謝你組合(電子票券)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }} // 只在第一次进入视口时触发
            className="text-black text-center text-[20px] mt-4 lg:text-[32px]"
          >
            1杯中杯那堤+1片經典起司蛋糕
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: device === "mobile" ? 0.8 : 0.6 }}
            transition={{
              type: "spring", // 使用 spring 动画类型
              stiffness: 100, // 弹簧的刚度
              damping: 5, // 阻尼
              duration: 2, // 动画持续时间
              delay: 3,
            }}
            viewport={{ once: true }} // 只在第一次进入视口时触发
            className="mt-4 lg:-mt-16 rounded-lg"
            src={present}
            alt="present"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-16 ">
          <QRCodeSVG
            value={presentQRCode}
            size={device === "mobile" ? 128 : 400}
          />
          <p className=" mt-4 font-semibold">{presentQRCode}</p>
          <p className=" mt-4 font-semibold">兌換截止日2024/12/06</p>
        </div>
      </div>
    </>
  );
};

export default Present;
