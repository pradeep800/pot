import gmail from "./gmail.png";
import lindin from "./linkdin.png";
import twitter from "./twitter.png";
import github from "./github.png";
export default function Contact() {
  return (
    <div className="flex h-[80vh] items-center  justify-around">
      <a href="mailto:pradeep8b0@gmail.com">
        <img alt="gmail photo" className="w-[100px]" src={gmail} />
      </a>
      <a href="https://www.linkedin.com/in/pradeep-b-6554a41b0" target="_blank">
        <img alt="linkdin" className="w-[100px]" src={lindin} />
      </a>
      <a href="https://twitter.com/pradeep14880712" target="_blank">
        <img alt="twitter" className="w-[100px]" src={twitter} />
      </a>
      <a href="https://github.com/pradeep800" target="_blank">
        <img alt="github" className="w-[100px]" src={github} />
      </a>
    </div>
  );
}
