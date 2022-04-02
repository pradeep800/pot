import { useState } from "react";
import Spinner from "../spinner/spinner";
import Preview from "./blogPreview";
import Blog from "./blog";
import temp from "./blog_data";
import { useEffect } from "react";
export default function Blogs() {
  const [load, setLoaded] = useState(false);
  const [obj, setobj] = useState([]);
  useEffect(() => {
    temp().then((result) => {
      setobj(result);
    });
  }, []);
  useEffect(() => {
    setTimeout(setLoaded, 300, true);
  }, [obj]);
  return (
    <div className="flex flex-col bg-green-200 place-items-center justify-around">
      {(() => {
        if (!load) {
          return <Spinner>Loading....</Spinner>;
        }
        if (obj.length != 0)
          return obj.map((objc) => {
            return <Preview key={objc.key} obj={objc} />;
          });
      })()}
    </div>
  );
}
