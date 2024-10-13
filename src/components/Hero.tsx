import ribbon1 from "../assets/ribbons1.svg";
import ribbon2 from "../assets/ribbons2.svg";
import firecracker1 from "../assets/firecracker1.svg";
import firecracker2 from "../assets/firecracker2.svg";
import cake from "../assets/cake.svg";
const Hero = () => {
  return (
    <div className="bg-[#F7E4DF] w-full h-[630px] flex flex-col justify-between relative">
      <img
        src={ribbon1}
        alt="ribbon"
        className="absolute flex left-0 top-0 w-1/3"
      />
      <img
        src={ribbon2}
        alt="ribbon"
        className="absolute flex right-0 top-0 w-1/3 "
      />
      <div className=" w-full h-full pt-8 flex flex-col items-center">
        <h2 className="">嘿！</h2>
        <h1 className="">老姊</h1>
        <p className="">生日快樂啦！</p>
        <p className=" font-jpFont text-4xl">
          もっと素敵になりますように。お誕生日おめでとう！
        </p>
        <h2> from 匯吾</h2>
      </div>

      <img
        src={firecracker1}
        alt="firecracker"
        className=" absolute left-0 bottom-0"
      />
      <img
        src={cake}
        alt="cake"
        className=" absolute left-1/2 bottom-0 transform -translate-x-1/2"
      />
      <img
        src={firecracker2}
        alt="firecracker"
        className=" absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Hero;
