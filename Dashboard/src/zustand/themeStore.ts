import { create } from 'zustand';

interface ThemeProps {
    theme: string;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeProps>((set) => ({
    theme: "light",
    toggleTheme: () => 
        set((state) => ({
            theme: state.theme === "light" ? "dark" : 'light'
    }))
}));

export default useThemeStore;