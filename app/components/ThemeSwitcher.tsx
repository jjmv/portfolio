import { Theme, useTheme } from "./contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  const handleThemeSwitch = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="inline-flex h-14 w-14 items-center justify-center overflow-hidden 
  rounded-full border-2 border-white p-1 transition
   focus:outline-none hover:focus:border-black dark:border-gray-600 dark:hover:focus:border-white"
    >
      <div className="relative h-8 w-8">
        <span className="text-primary">
          {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
        </span>
      </div>
    </button>
  );
}
