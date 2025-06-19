import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = "light" | "dark";
interface ThemeProps {
    theme: Theme;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () => set((state) => ({
        theme: state.theme === "light" ? "dark" : "light"
      }))
    }),
    {
      name: 'theme-storage', 
    }
  )
);

export default useThemeStore;