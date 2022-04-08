import { Link } from "react-router-dom";
export default function Preview({ obj }) {
  return (
    <div className="sm:w-[80vw] w-[95vw] md:w-[50vw] mt-8">
      <div className="relative bg-gray-300  h-[90vh] overflow-hidden ">
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
              <p>{obj.upload} </p>

              <p>
                &nbsp;<span className="">by</span> {obj.author}
              </p>
            </div>
          </div>
          <div className="   mt-4 sm:mt-8 min-h-[70vh] sm:ml-[10vh] pb-[10vh]  text-[16px]	  mx-[12px] text-justify sm:mr-[10vh]  ">
            {obj.para.map((value, index) => {
              return (
                <div key={index}>
                  <div className="indent-4 mt-4">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-300 text-blue-800 mb-8 py-3 hover:text-red-300  hover:bg-gray-600">
        <Link
          className=" py-3 sm:px-[20vw] px-[34vw]"
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
