import { Link } from "react-router-dom";
import "./blog.css";
export default function Preview({ obj }) {
  return (
    <div className="mb-[2rem] mt-[3rem] max-w-[40rem] m-[auto] md-[8rem]">
      <div className="   ">
        <div class="h-[90vh] overflow-hidden ">
          <div className="h-[5rem] flex flex-col justify-around align-between">
            <h1 className="text-4xl  text-center text-gray-400">{obj.title}</h1>
            <div className="flex  justify-around text-[15px] text-gray-400">
              <p class="">{obj.upload} </p>
              <p className="">by {obj.author}</p>
            </div>
          </div>
          <div className="font-writing tracking-wider sm:text-lg text-justify sm:px-[3rem] p-[1rem]  leading-6 sm:leading-7">
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
      <div className="text-center h-[2rem] hover:bg-gray-300 ">
        <Link
          className="px-[30%] "
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
