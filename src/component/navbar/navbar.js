import { NavLink } from "react-router-dom";
import img from "./1.png";
export default function Nav() {
  return (
    <nav className="h-[50px] bg-green-400 w-[100vw] flex items-center content-between relative z-50 justify-around  font-mono sm:justify-around sm:content-center">
      <NavLink to="/" className="w-[40px]">
        <img src={img} alt="logo"></img>
      </NavLink>

      <NavLink
        activeClassName="bg-green-500 rounded-lg"
        className="text-red-800 sm:text-4xl hover:text-red-500 font-bold"
        to="/about"
      >
        about me
      </NavLink>
      <NavLink
        activeClassName="bg-green-500  rounded-lg"
        className="text-red-800  hover:text-red-500 sm:text-4xl font-bold"
        to="/contact"
      >
        contact me
      </NavLink>
      <NavLink
        activeClassName="bg-green-500  rounded-lg"
        className="text-red-800 hover:text-red-500 sm:text-4xl font-bold"
        to="/blog"
      >
        Blogs
      </NavLink>
    </nav>
  );
}
