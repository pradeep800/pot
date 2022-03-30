import { useEffect, useRef, useState } from "react";
import temp from "./blog_data";
import img from "./1.jpg";
export default function Blog() {
  const [obj, setobj] = useState({ img: "" });
  useEffect(() => {
    temp().then((result) => {
      setobj(result);
    });
  }, []);
  return (
    <div className="relative">
      <img
        src={obj.img}
        alt="i don't know what happen"
        className="object-cover absolute w-[100vw] h-[30vh] "
      ></img>
      <div className="relative z-30 p-[5vh] h-[30vh] flex flex-col justify-between">
        <h1 className="text-center text-4xl font-black  text-pink-600">
          {obj.title}
        </h1>
        <p className="p-4"></p>
        <div className="flex justify-between  text-red-400 text-1xl font-mono pl-4 ">
          <p>
            <span>upload date</span>:- {obj.upload}
          </p>

          <p>
            <span>author name</span>:- {obj.author}
          </p>
        </div>
      </div>
      <div className="sm:ml-[10vh] sm:mr-[10vh] font-red tracking-wide leading-10">
        <div className="indent-8">{obj.para[0]}</div>
        <p className="m-4"></p>
        <div className="indent-8">{obj.para[1]}</div>
        <p className="m-4"></p>
        <div className="indent-8">{obj.para[2]}</div>
      </div>
    </div>
  );
}
