import React from "react";

export const Pagination = ({ PostPerPage, TotalPosts, paginate }) => {
  console.log(TotalPosts);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(TotalPosts / PostPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="bg-red-300 flex justify-around w-[100vw] sm:w-[80vw] mb-[20px] text-center rounded-lg">
      {pageNumber.map((number) => {
        return (
          <li key={number} className="w-[80px] hover:bg-green-300 rounded-lg ">
            <a
              className=" "
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
