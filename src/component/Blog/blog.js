import { useEffect, useRef, useState } from "react";
import Spinner from "../spinner/spinner";
import temp from "./blog_data";
export default function Blog() {
  const [load, setLoaded] = useState(false);
  const [obj, setobj] = useState({
    img: "",
    title: "",
    upload: "",
    created: "",
    para: ["", "", ""],
  });
  useEffect(() => {
    temp().then((result) => {
      setobj(result);
    });
  }, []);
  useEffect(() => {
    setTimeout(setLoaded, 1000, true);
  }, [obj]);
  console.log(obj);

  return (
    <div className="relative bg-gray-300  ">
      {!load && <Spinner>Loading...</Spinner>}
      {load && (
        <div>
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
                <span>Upload date</span>:- {obj.upload}
              </p>

              <p>
                <span>Author name</span>:- {obj.author}
              </p>
            </div>
          </div>
          <div className="   min-h-[70vh] sm:ml-[10vh] pb-[10vh]  text-[16px]	 sm:text-xl mx-[12px] text-justify sm:mr-[10vh]  ">
            {obj.para.map((value, index) => {
              return (
                <div key={index}>
                  <div className="indent-4">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
