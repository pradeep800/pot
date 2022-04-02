import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Blog({ object }) {
  let obj = "";
  let id = useParams().id;
  for (let i = 0; i < object.length; i++) {
    console.log(i);
    if (object[i].key == parseInt(id)) {
      obj = object[i];
    }
  }
  return (
    <div className="relative bg-gray-300  ">
      {(() => {
        if (obj != "") {
          return (
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
                <p className="sm:p-4 p-1"></p>
                <div className="flex justify-between text-red-400 text-1xl font-mono ">
                  <p>
                    <span>Upload date</span>:- {obj.upload}
                  </p>
                  <p>
                    <span>Author name</span>:- {obj.author}
                  </p>
                </div>
              </div>
              <div className="   mt-4 sm:mt-8 min-h-[70vh] sm:ml-[10vh] pb-[10vh]  text-[16px]	 sm:text-xl mx-[12px] text-justify sm:mr-[10vh]  ">
                {obj.para.map((value, index) => {
                  return (
                    <div key={index}>
                      <div className="indent-4 mt-4">{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else {
          return <div>no article match</div>;
        }
      })()}
    </div>
  );
}
