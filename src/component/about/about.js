import { useEffect, useState } from "react";
import Canvas from "../canvas/canvas";
import img from "./pradeep.png";
import glass from "./glass.png";
import joint from "./joint.gif";
import { NavLink } from "react-router-dom";
import moment from "moment";
export default function About() {
  useEffect(() => {
    let date = document.getElementsByClassName("date")[0];
    setInterval(() => {
      let time = diffYMDHMS(moment(Date.now()), moment([2003, 6, 9]));
      let age =
        "i am " +
        time.years +
        " years " +
        time.months +
        " months " +
        time.days +
        " days " +
        time.hours +
        " hours " +
        time.minutes +
        " minutes " +
        time.seconds +
        " seconds and " +
        time.mili +
        "  milliseconds " +
        "old";
      date.innerHTML = age;
    }, 200);

    function diffYMDHMS(current, birthday) {
      let duration = moment.duration(current.diff(birthday));
      let years = duration.years();
      let months = duration.months();
      let days = duration.days();
      let hours = duration.hours();
      let minutes = duration.minutes();
      let seconds = duration.seconds();
      let mili = duration.milliseconds();
      return { years, months, days, hours, minutes, seconds, mili };
    }
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
    }, 300);
  }, []);

  return (
    <div className="h-[80vh]   flex  flex-col justify-center font-spacing font-black">
      <div className="  h-[20rem] flex flex-col justify-center items-center">
        <div className="pt-[20px]  ">
          Hi! i am <span id="auto-text"></span>
        </div>
        <div className=" leading-8 indent-4 max-w-[40ch] p-[10px] text-justify tracking-wider ">
          <span className="date"></span>
          <span>
            {" "}
            and I am pursuing B.Tech in computer science from{" "}
            <a
              href="https://uttaranchaluniversity.ac.in/"
              className="text-blue-300 hover:text-red-300"
              target="_blank"
            >
              Uttranchal University
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
