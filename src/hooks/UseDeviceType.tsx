import { useState, useEffect } from "react";

// 定义设备类型的枚举
type DeviceType = "mobile" | "desktop";

// 自定义 Hook 来检测设备类型
const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop"); // 默认为桌面设备

  useEffect(() => {
    // 定义一个函数来判断当前的设备类型
    const updateDeviceType = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    // 初次判断设备类型
    updateDeviceType();

    // 监听窗口大小变化
    window.addEventListener("resize", updateDeviceType);

    // 清除监听器
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
