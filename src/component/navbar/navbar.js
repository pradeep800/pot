import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="h-[80px]  w-[100vw] flex items-center content-between relative z-50 justify-around  font-mono">
      <NavLink
        className="text-red-800 sm:text-4xl hover:text-blue-300 font-bold"
        to="/about"
      >
        about me
      </NavLink>
      <NavLink
        className="text-red-800  hover:text-blue-300 sm:text-4xl font-bold"
        to="/contact"
      >
        contact me
      </NavLink>
      <NavLink
        className="text-red-800 hover:text-blue-300 sm:text-4xl font-bold"
        to="/blog"
      >
        Blogs
      </NavLink>
    </nav>
  );
}