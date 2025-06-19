import { useEffect, useState } from "react";
import useThemeStore from "../zustand/themeStore";

const Theme = () => {
   const { theme, toggleTheme } = useThemeStore();

   useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, []);

  return (
    <button 
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md dark:bg-gray-800 bg-gray-200 text-gray-800 dark:text-gray-200`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default Theme