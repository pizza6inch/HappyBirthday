import { createContext, useState } from "react";

interface AppContextType {
  showPresent: boolean;

  setShowPresent: (showPresent: boolean) => void;
}
// 創建一個 ThemeContext
export const AppContext = createContext<AppContextType>({
  showPresent: false,
  setShowPresent: () => {},
});

function ContextProvider({ children }: { children: JSX.Element }) {
  // 定義一個狀態來切換主題
  const [showPresent, setShowPresent] = useState(false);

  return (
    // 將 theme 和 toggleTheme 提供給子組件
    <AppContext.Provider value={{ showPresent, setShowPresent }}>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
