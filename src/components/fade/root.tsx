import { createContext, ReactNode, useContext, useState } from "react";

type RootProps = {
  children: ReactNode;
};

type RootFadeContextData = {
  visible: boolean;
  setVisible: (visibility: boolean) => void;
};

export const RootFadeContext = createContext({} as RootFadeContextData);

export function Root({ children }: RootProps) {
  const [visible, setVisible] = useState(false);

  return (
    <RootFadeContext.Provider value={{ visible, setVisible }}>
      <div>{children}</div>
    </RootFadeContext.Provider>
  );
}

export const useFadeContext = () => useContext(RootFadeContext);
