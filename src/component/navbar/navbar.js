import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import img from "./1.png";
export default function Nav() {
  useEffect(() => {
    let ham = document.getElementById("hamburger");
    let open = document.getElementById("open");
    window.onresize = () => {
      const style = getComputedStyle(ham).display;
      if (style == "none") {
        open.style.display = "flex";
      }
    };
    let i = 0;
    ham.onclick = () => {
      if (i % 2 === 0) {
        open.style.display = "none";
      } else {
        open.style.display = "flex";
      }
      i++;
    };
  }, []);
  return (
    <div className="flex sm:justify-between bg-green-300 w-[100vw]">
      <NavLink to="/" className="w-[40px]">
        <img src={img} alt="logo"></img>
      </NavLink>
      <div className="w-[100vw] sm:w-[70vw]">
        <p id="hamburger" className="sm:hidden relative top-[5px] left-[80vw]">
          &#9776;
        </p>
        <ul
          id="open"
          className="bg-green-300 flex flex-col sm:flex-row items-end sm:justify-between sm:w-auto pr-[20px]"
        >
          <NavLink
            activeClassName="bg-green-500 rounded-lg"
            className="text-red-800 sm:text-3xl hover:text-red-500 font-bold"
            to="/about"
          >
            about me
          </NavLink>
          <NavLink
            activeClassName="bg-green-500  rounded-lg"
            className="text-red-800  hover:text-red-500 sm:text-3xl font-bold"
            to="/contact"
          >
            contact me
          </NavLink>
          <NavLink
            activeClassName="bg-green-500  rounded-lg"
            className="text-red-800 hover:text-red-500 sm:text-3xl font-bold"
            to="/blog"
          >
            Blogs
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
