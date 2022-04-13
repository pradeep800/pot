import { Link } from "react-router-dom";
import "./blog.css";
export default function Preview({ obj }) {
  return (
    <div className="bg-gray-300 mb-[2rem] max-w-[40rem] m-[auto] md-[8rem]">
      <div className="   ">
        <div class="h-[90vh] overflow-hidden ">
          <div className="something h-[12rem] flex flex-col justify-around ">
            <h1 className="text-4xl  text-center font-black">{obj.title}</h1>
            <div className="flex justify-around text-sm">
              <p class="">{obj.upload} </p>
              <p className="">by {obj.author}</p>
            </div>
          </div>
          <div className="font-writing tracking-wider sm:text-lg text-justify p-[10px]  leading-6 sm:leading-7">
            {obj.para.map((value, index) => {
              return (
                <div className="pt-4" key={index}>
                  <div className="indent-2">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center h-[2rem] ">
        <Link
          className="px-[30%]"
          to={() => {
            return `/blog/${obj.key}`;
          }}
        >
          read more
        </Link>
      </div>
    </div>
  );
}
