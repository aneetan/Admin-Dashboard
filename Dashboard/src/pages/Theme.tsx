import useThemeStore from "../zustand/themeStore";

const Theme = () => {
  const theme = useThemeStore((state) => state.theme);
  
  return (
    <div className={`text-amber-300 ${theme}`}>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default Theme