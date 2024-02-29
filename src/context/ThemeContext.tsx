"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  theme: string;
  toggle: () => void;
}>({
  theme: "light",
  toggle: () => {},
});

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Added a default return in case typeof window is undefined
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const [theme, setTheme] = useState(() => getFromLocalStorage());

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const contextValue = { theme, toggle };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
