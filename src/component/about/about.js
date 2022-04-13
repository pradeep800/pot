import { useEffect, useState } from "react";
import Canvas from "../canvas/canvas";
import img from "./pradeep.png";
import glass from "./glass.png";
import joint from "./joint.gif";
import { NavLink } from "react-router-dom";
export default function About() {
  useEffect(() => {
    let str = ["pradeep", "coder", "student", "a proud indian"];
    let text = document.getElementById("auto-text");
    let i = 0,
      j = 0;
    let p;
    let first = true;
    setInterval(() => {
      text.innerText = str[i].substr(0, j + 1);
      j++;
      if (j == str[i].length) {
        j--;
      }
      if (str[i].length - 1 == j && first) {
        first = false;
        setTimeout(() => {
          j = 0;
          i++;
          if (i == str.length) {
            i = 0;
          }
          first = true;
        }, 1000);
      }
    }, 200);
  }, []);

  return (
    <div className="bg-green-200 h-[100vh] ">
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
            className="absolute w-[200px] left-[0px]  top-[95px] animate-joint sm:animate-joint2 lg:animate-joint3"
          ></img>
          <div id="text" className="text-2xl   font-black font-cool">
            i am &nbsp;
            <span id="auto-text" className="animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
