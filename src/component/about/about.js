import Canvas from "../canvas/canvas";
import img from "./pradeep.jpg";
export default function About() {
  return (
    <div>
      <div className="h-[80vh] relative">
        <div className="w-[100vw] flex absolute pt-[30px] justify-center">
          <Canvas />
        </div>
        <div className="flex flex-col items-center pt-[30px]">
          <img src={img} className="w-[200px]"></img>
          <p className="text-xl pt-[10vh] font-black font-mono text-black-500 text-center w-[100vw] ">
            hi i am Pradeep singh bisht
          </p>
        </div>
      </div>
    </div>
  );
}
