import Canvas from "../canvas/canvas";
import img from "./pradeep.jpg";
export default function About() {
  return (
    <div>
      <div className="h-[80vh] relative">
        <Canvas />
        <img
          src={img}
          className="h-[20vh] absolute top-[12vh]  left-[40vw] md:left-[45vw] z-20"
        ></img>
        <p className="absolute z-50 top-[40vh] text-xl font-black font-mono text-black-500 text-center w-[100vw] ">
          hi i am Pradeep singh bisht
        </p>
      </div>
    </div>
  );
}
