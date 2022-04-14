import React from "react";

export const Pagination = ({ PostPerPage, TotalPosts, paginate }) => {
  console.log(TotalPosts);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(TotalPosts / PostPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="bg-green-400 m-[auto] flex justify-around max-w-[40rem] mb-[1rem] rounded-lg ">
      {pageNumber.map((number) => {
        return (
          <li
            onClick={() => {
              paginate(number);
            }}
            key={number}
            className="w-[80px] hover:bg-green-300 rounded-lg "
          >
            <a className=" ">{number}</a>
          </li>
        );
      })}
    </ul>
  );
};
