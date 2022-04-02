import { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative bg-gray-300  ">
      {(() => {
        if (obj !== "") {
          return (
            <div className="flex flex-col place-items-center">
              <img
                src={obj.img}
                alt="i don't know what happen"
                className="object-cover absolute sm:w-[80vw] h-[30vh] "
              ></img>
              <div className="relative z-30 p-[5vh] h-[30vh] flex flex-col justify-between">
                <h1 className="text-center text-4xl font-black  text-red-300">
                  {obj.title}
                </h1>
                <p className="sm:p-4 p-1"></p>
                <div className=" w-[100vw] sm:w-[80vw] flex justify-between px-[20px] text-pink-400 text-lg text-1xl font-mono md:justify-around ">
                  <p>{obj.upload}</p>
                  <p>
                    <span className="text-green-300 font-bold text-xl">
                      by&nbsp;
                    </span>
                    {obj.author}
                  </p>
                </div>
              </div>
              <div className="sm:w-[70vw] text-base sm:text-lg md:text-xl  text-justify flex flex-col place-items-center place-content-center md:w-[60vw] ">
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
