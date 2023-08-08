import { ThemeSwitcher } from "./ThemeSwitcher";
import type { LinkProps } from "@remix-run/react";
import { Link } from "@remix-run/react";

function NavbarLink({ children, ...rest }: LinkProps) {
  return (
    <Link {...rest} className="block px-4 py-4">
      {children}
    </Link>
  );
}

export function Navbar() {
  return (
    <div className="text-primary flex w-full justify-between p-9">
      <div>Logo</div>
      <nav className=" pointer-events-auto hidden md:block">
        <ul className="flex gap-4 rounded-full bg-white/90 px-3 shadow-lg backdrop-blur dark:bg-zinc-800/90">
          <li>
            <NavbarLink to="about">About</NavbarLink>
          </li>
          <li>
            <NavbarLink to="work">Work</NavbarLink>
          </li>
          <li>
            <NavbarLink to="skills">Skills</NavbarLink>
          </li>
          <li>
            <NavbarLink to="contact">Contact</NavbarLink>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher />
    </div>
  );
}
