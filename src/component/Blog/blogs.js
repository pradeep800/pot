import { useState } from "react";
import Spinner from "../spinner/spinner";
import Preview from "./blogPreview";
import Blog from "./blog";
import temp from "./blog_data";
import { useEffect } from "react";
export default function Blogs({ obj }) {
  return (
    <div className="flex flex-col bg-green-200 place-items-center justify-around">
      {(() => {
        return obj.map((objc) => {
          return <Preview key={objc.key} obj={objc} />;
        });
      })()}
    </div>
  );
}
