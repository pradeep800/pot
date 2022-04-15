import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "../home/home";

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
    <div className="mb-[2rem] pt-[3rem] max-w-[40rem] m-[auto] md-[8rem]">
      <div className="   ">
        <div class=" ">
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
    </div>
  );
}
// {/* Blog.defaultProps = {
//   obj: [],
// };
// Blog.propTypes = {
//   /*
//   import PropTypes from "prop-types"
//   if there is only one object
//   para:ProtoTypes.arrayOf(ProtoTypes.string).isRequired;
//   img:ProtoTypes.string;
//   title:ProtoTypes.string;
//   */
// }; */}
