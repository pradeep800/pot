import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import img from "./1.png";
export default function Nav() {
  function removenav() {
    let ham = document.getElementById("hamburger");
    let open = document.getElementById("open");
    console.log(getComputedStyle(ham).display);
    if (getComputedStyle(ham).display != "none") open.style.display = "none";
    ham.style.top = "10px";
  }
  useEffect(() => {
    let ham = document.getElementById("hamburger");
    let open = document.getElementById("open");
    window.onresize = () => {
      const style = getComputedStyle(ham).display;
      if (style == "none") {
        open.style.display = "flex";
      }
    };
    if (getComputedStyle(ham).display !== "none") {
      open.style.display = "none";
    }
    ham.onclick = () => {
      if (open.style.display === "none") {
        open.style.display = "flex";
      } else {
        open.style.display = "none";
      }
    };
  }, []);
  return (
    <nav className="flex  h-[50px] fixed  z-40 sm:justify-around sm:items-center  bg-green-300 w-[100vw]">
      <NavLink
        onClick={removenav}
        to="/"
        className="w-[40px] sm:static relative left-4 top-2 justify-self-center   "
      >
        <img src={img} alt="logo"></img>
      </NavLink>
      <div className="w-[100vw] sm:w-[70vw] ">
        <p
          id="hamburger"
          className="sm:hidden relative  left-[80vw] top-[10px] text-3xl font-black"
        >
          &#9776;
        </p>
        <div
          id="open"
          className="bg-green-300 text-xl h-[30vh] sm:h-auto flex flex-col sm:flex-row justify-around items-end sm:justify-between sm:items-center sm:w-auto pr-[20px]"
        >
          <NavLink
            onClick={removenav}
            activeClassName="bg-green-500 rounded-lg"
            className="text-red-800 sm:text-3xl hover:text-red-500 font-bold "
            to="/about"
          >
            about me
          </NavLink>
          <NavLink
            onClick={removenav}
            activeClassName="bg-green-500  rounded-lg"
            className="text-red-800  hover:text-red-500 sm:text-3xl font-bold"
            to="/contact"
          >
            contact me
          </NavLink>
          <NavLink
            onClick={removenav}
            activeClassName="bg-green-500  rounded-lg"
            className="text-red-800 hover:text-red-500 sm:text-3xl font-bold"
            to="/blog"
          >
            Blogs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
