import { useState, useEffect } from "react";
import useDeviceType from "../hooks/useDeviceType";

import CapooCanvas from "./CapooCanvas";
import { motion } from "framer-motion";

const Dialog = ({ isOpen = false }: { isOpen: boolean }) => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "-5%",
        left: "50%",
        transform: " translateX(-50%)",
      }}
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }} // 對話框從上方淡入
          animate={{ opacity: 1, y: 0 }} // 動畫過程
          exit={{ opacity: 0, y: -50 }} // 淡出動畫
          transition={{ duration: 0.3, ease: "easeInOut" }} // 過渡效果
          style={{
            position: "relative",
            display: "inline-block",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "20px", // 橢圓形外框
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
            width: "250px",
            textAlign: "left",
          }}
        >
          <p style={{ margin: "0 0 10px 0" }}>太快啦!😵‍💫</p>
          {/* 左下角的三角形 */}
          <div
            style={{
              position: "absolute",
              bottom: "-15px", // 三角形在橢圓形框的底部
              left: "20px", // 三角形在左下角
              width: "0",
              height: "0",
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderTop: "15px solid #fff", // 白色三角形
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

const CapooArea = () => {
  const [cuteness, setCuteness] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const deviceType = useDeviceType();

  const handleClicked = () => {
    setSpeed((prev) => prev + 1);
    setCuteness((prev) => prev + 1);
  };

  useEffect(() => {
    if (cuteness >= 100) setIsOpen(true);
  }, [cuteness]);

  return (
    <div className="w-full h-min lg:h-[600px] py-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#103362] h-[100px] font-bold text-[40px] text-center font-enFont"
      >
        咖咖咖波🥳
      </motion.h2>
      <div className=" flex w-full h-[400px]  flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 hover:cursor-grab active:cursor-grabbing relative">
          <Dialog isOpen={isOpen} />
          <CapooCanvas speed={speed} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          {deviceType === "desktop" && (
            <motion.div
              initial={{ opacity: 0, scale: 2, rotate: 360, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
              transition={{ duration: 1 }}
              className="font-enFont font-semibold text-[#103362] mt-6 text-[40px] text-center "
            >
              咖波的可愛指數:
            </motion.div>
          )}
          <span>
            <motion.span
              key={cuteness} // 為每個變動數字設置唯一的 key 來觸發動畫
              initial={{ scale: 1, color: "#0000ff" }} // 初始狀態
              animate={{ scale: [1, 1 + cuteness / 100, 1], color: ["#0000ff", "#ff0000", "#0000ff"] }} // 動畫狀態
              transition={{ duration: 0.5, ease: "easeInOut" }} //
              className=" inline-block font-bold"
            >
              {cuteness}
            </motion.span>
            {"  "}/ 100
          </span>
          <button
            onClick={handleClicked}
            className=" active:shadow-none active:translate-y-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapooArea;
