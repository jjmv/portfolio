// import { Theme, useTheme } from "./contexts/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  return (
    <div className="text-primary flex w-full justify-between">
      <div>Logo</div>
      <nav>Navbar</nav>
      <ThemeSwitcher />
    </div>
  );
}
