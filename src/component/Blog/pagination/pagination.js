import React from "react";

export const Pagination = ({ PostPerPage, TotalPosts, paginate }) => {
  console.log(TotalPosts);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(TotalPosts / PostPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="bg-gray-400 m-[auto] flex justify-around justify-items-center max-w-[40rem] mb-[1rem] rounded-lg ">
      {pageNumber.map((number) => {
        return (
          <li
            onClick={() => {
              paginate(number);
            }}
            key={number}
            className="hover:bg-gray-300 w-[2rem] rounded-lg text-center"
          >
            <a className=" ">{number}</a>
          </li>
        );
      })}
    </ul>
  );
};
