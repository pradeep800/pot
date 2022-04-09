import { useEffect, useState } from "react";
import Canvas from "../canvas/canvas";
import img from "./pradeep.png";
import glass from "./glass.png";
import joint from "./joint.gif";
export default function About() {
  useEffect(() => {
    let a = "hi i am pradeep bisht";
    let i = 0;
    let s;
    const text = document.getElementById("inpo");
    function write() {
      text.innerHTML = a.slice(0, i);
      if (i > a.length) {
        i = 0;
        clearTimeout(s);
      }
      i++;
    }
    s = setInterval(write, 200);
  }, []);

  return (
    <div>
      <div className="h-[80vh] relative">
        <div className="w-[100vw] flex absolute pt-[30px] justify-center">
          <Canvas />
        </div>
        <div className="flex flex-col items-center pt-[30px]">
          <img src={img} className="w-[200px]"></img>
          <img
            src={glass}
            className="w-[150px]  absolute right-auto animate-uptodown"
          ></img>
          <img
            src={joint}
            className="absolute w-[200px] left-[0px]  top-[95px] sm:animate-joint2 animate-joint lg:animate-joint3"
          ></img>
          <p
            id="inpo"
            className=" pt-[10vh]  font-bold font-mono text-xl text-stone-700 text-center w-[100vw] "
          ></p>
        </div>
      </div>
    </div>
  );
}
