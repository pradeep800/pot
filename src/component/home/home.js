import { useEffect } from "react";
import Spinner from "../spinner/spinner";
export default function Home() {
  // useEffect(() => {
  //   let i = 0;
  //   let s;
  //   const cas = document.getElementById("cas");
  //   function write() {
  //     cas.style.transform = `translateX(-${i * 100}vw)`;
  //     if (i > 2) {
  //       i = -1;
  //     }
  //     i++;
  //   }
  //   s = setInterval(write, 2000);
  // }, []);
  return (
    <>
      <Spinner>maybe i will create something in future...</Spinner>
      <a className="text-blue-300" href="https://pradeepbisht.com/about">
        Goto about selection
      </a>
    </>
  );
  // return (
  //   <div className="bg-white h-[80vh]">
  //     <div className="overflow-hidden ">
  //       <div id="cas" className="flex box-border translate-x-0 ">
  //         <div>
  //           <div className="flex  font-mono flex-col w-[100vw] h-[30vh] place-content-around">
  //             <span className="text-center">"Perfection is enemy of good"</span>
  //             <span className="text-right mx-8">Voltaire</span>
  //           </div>
  //         </div>
  //         <div>
  //           <div className="flex flex-col font-mono w-[100vw] h-[30vh]  place-content-around">
  //             <span className="text-center font-serif">
  //               "Let it hurt let it bleed let it heal and let it go"
  //             </span>
  //             <span className=" text-right mx-8">Peaky Blinders</span>
  //           </div>
  //         </div>
  //         <div>
  //           <div className="flex font-mono flex-col w-[100vw] h-[30vh]   place-content-around ">
  //             <span className="text-center">
  //               "How you do anything is how you do everything"
  //             </span>
  //             <span className="text-right mx-8">Martha Beck</span>
  //           </div>
  //         </div>
  //         <div>
  //           <div className="flex font-mono flex-col w-[100vw] h-[30vh] place-content-around">
  //             <span className="text-center">
  //               "Many people think that they lack motivation when they lack
  //               clarity"
  //             </span>
  //             <span className="text-right mx-8">James Clear</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
