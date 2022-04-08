import gmail from "./gmail.png";
import lindin from "./linkedin.png";
import twitter from "./twitter.png";
import github from "./github.png";
export default function Contact() {
  return (
    <div className="flex h-[100vh] items-center  justify-center bg-green-200 ">
      <div className="bg-green-300 h-[70vh] w-[90vw]  flex flex-col  justify-center content-around rounded-2xl">
        <div className=" font-cool font-black text-4xl flex  flex-col items-center  justify-center">
          Contact Me
        </div>
        <div className="pt-[10vh] flex  justify-around items-center ">
          <a href="mailto:pradeep8b0@gmail.com">
            <img
              alt="gmail photo"
              className="w-[50px] sm:w-[100px] animate-shadowChange"
              src={gmail}
              style={{
                borderRadius: "30px",
                backgroundColor: "transparent",
                boxShadow: "4px 5px 30px blue",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pradeep-b-6554a41b0"
            target="_blank"
          >
            <img
              alt="linkdin"
              className="shadow-2xl shadow-blue-700 animate-shadowChange bg-blue-200 w-[50px] sm:w-[100px] "
              src={lindin}
              style={{
                borderRadius: "30px",
                backgroundColor: "transparent",
                boxShadow: "4px 5px 30px blue",
              }}
            />
          </a>
          <a href="https://twitter.com/pradeep14880712" target="_blank">
            <img
              style={{
                borderRadius: "30px",
                backgroundColor: "transparent",
                boxShadow: "4px 5px 30px blue",
              }}
              alt="twitter"
              className=" w-[50px] sm:w-[100px]  animate-shadowChange"
              src={twitter}
            />
          </a>
          <a href="https://github.com/pradeep800" target="_blank">
            <img
              style={{
                borderRadius: "30px",
                backgroundColor: "transparent",
                boxShadow: "4px 5px 30px blue",
              }}
              alt="github"
              className="w-[50px] sm:w-[100px] animate-shadowChange"
              src={github}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
