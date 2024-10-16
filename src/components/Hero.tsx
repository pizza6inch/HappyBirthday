import ribbon1 from "../assets/ribbons1.svg";
import ribbon2 from "../assets/ribbons2.svg";
import firecracker1 from "../assets/firecracker1.svg";
import firecracker2 from "../assets/firecracker2.svg";
import cake from "../assets/cake.svg";
import { motion } from "framer-motion";

import useDeviceType from "../hooks/useDeviceType";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

type content = { text: string; color: string }[];

const Congratulations = [
  { text: "風のように自由で、", color: "text-green-400" },
  { text: "花のように美しい", color: "text-red-400" },
  { text: "日々を過ごせますように！", color: "black" },
];

const Congratulations2 = [
  { text: "これからも、", color: "text-blue-400" },
  { text: "毎日を大切に、", color: "text-yellow-400" },
  { text: "あなたらしく過ごしてくださいね！", color: "black" },
];

const LetterWithAnimate = ({ content }: { content: content }) => (
  <div className="mt-6">
    {content.map(({ text, color }, lineIndex) => (
      <motion.span
        key={lineIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: lineIndex * 0.5 }} // 每行延迟 1 秒
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: lineIndex * 1 + index * 0.1 + 2,
            }} // 每个字母延迟 0.05 秒
            className={`font-bold ${color}`}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    ))}
  </div>
);

const Decoration = () => {
  const deviceType = useDeviceType();
  return (
    <>
      <Fireworks autorun={{ speed: 3, delay: 8000, duration: 5000 }} />
      <motion.img
        initial={{ y: 100, opacity: 0 }} // 初始状态
        whileInView={{ y: 0, opacity: 1 }} // 在视口内时的状态
        viewport={{ once: true }} // 只在第一次进入视口时触发
        transition={{ duration: 2 }}
        src={ribbon1}
        alt="ribbon"
        className="absolute flex left-0 top-0 w-1/3"
      />
      <motion.img
        initial={{ y: 100, opacity: 0 }} // 初始状态
        whileInView={{ y: 0, opacity: 1 }} // 在视口内时的状态
        viewport={{ once: true }} // 只在第一次进入视口时触发
        transition={{ duration: 2 }}
        src={ribbon2}
        alt="ribbon"
        className="absolute flex right-0 top-0 w-1/3 "
      />
      <motion.img
        initial={{ scaleY: 1.5, opacity: 0, y: -50 }} // 初始状态
        whileInView={{ scaleY: 1, opacity: 1, y: 0 }} // 在视口内时的状态
        viewport={{ once: true }} // 只在第一次进入视口时触发
        transition={{
          type: "spring", // 使用 spring 动画类型
          stiffness: 100, // 弹簧的刚度
          damping: 5, // 阻尼
          duration: 2, // 动画持续时间
          delay: 5,
        }}
        src={firecracker1}
        alt="firecracker"
        className=" absolute left-0 bottom-0 w-1/6"
      />
      <motion.img
        initial={{ scaleY: 1.5, opacity: 0, y: -50 }} // 初始状态
        whileInView={{ scaleY: 1, opacity: 1, y: 0 }} // 在视口内时的状态
        viewport={{ once: true }} // 只在第一次进入视口时触发
        transition={{
          type: "spring", // 使用 spring 动画类型
          stiffness: 100, // 弹簧的刚度
          damping: 5, // 阻尼
          duration: 2, // 动画持续时间
          delay: 5,
        }}
        src={firecracker2}
        alt="firecracker"
        className=" absolute right-0 bottom-0 w-1/6"
      />
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1/6">
        <motion.img
          initial={{ scale: 0.01, opacity: 0, y: -10 }} // 初始状态
          whileInView={deviceType === "mobile" ? { scale: 3, opacity: 1, y: -300 } : { scale: 2, opacity: 1, y: -80 }} // 在视口内时的状态
          viewport={{ once: true }} // 只在第一次进入视口时触发
          transition={{
            type: "spring", // 使用 spring 动画类型
            stiffness: 100, // 弹簧的刚度
            damping: 5, // 阻尼
            duration: 2, // 动画持续时间
            delay: 6,
          }}
          src={cake}
          alt="cake"
          className=" "
        />
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <div className="pb-6">
      <div className=" w-[full] h-[100vh]  flex flex-col items-center relative ">
        <Decoration />
        <h1 className="text-black font-bold text-[40px] mt-6">To 姵涵</h1>
        <p className="text-[#103362] font-enFont mt-10 mx-4">
          {"Happy Birthday！".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 1 + index * 0.1,
              }} // 每个字母延迟 0.05 秒
              className={`text-[36px] lg:text-[80px] font-bold`}
            >
              {letter}
            </motion.span>
          ))}
        </p>
        <div className=" font-jpFont text-2xl lg:text-4xl mt-4 mx-4">
          <LetterWithAnimate content={Congratulations} />
          <LetterWithAnimate content={Congratulations2} />
        </div>
        <motion.h2
          className="text-gray-800 font-semibold text-[28px] mt-10 lg:left-[300px] relative"
          initial={{ rotate: 270, opacity: 0 }} // 初始状态
          whileInView={{ rotate: 0, opacity: 1 }} // 在视口内时的状态
          viewport={{ once: true }} // 只在第一次进入视口时触发
          transition={{ duration: 0.5, delay: 8 }}
        >
          from 老吾
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero;
