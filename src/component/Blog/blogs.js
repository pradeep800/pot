import { useState } from "react";
import Spinner from "../spinner/spinner";
import Preview from "./blogPreview";
import Blog from "./blog";
import temp from "./blog_data";
import { useEffect } from "react";
import { Pagination } from "./pagination/pagination";
export default function Blogs({ obj }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const indexOfLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexOfLastPost - postPerPage;
  const current = obj.slice(indexofFirstPost, indexOfLastPost);
  function paginate(number) {
    window.scrollTo(0, 0);
    setCurrentPage(number);
  }
  const totalPosts = obj.length;
  return (
    <div className="overflow-hidden">
      {(() => {
        return current.map((objc) => {
          return <Preview key={objc.key} obj={objc} />;
        });
      })()}
      <Pagination
        PostPerPage={postPerPage}
        TotalPosts={totalPosts}
        paginate={paginate}
      />
    </div>
  );
}
