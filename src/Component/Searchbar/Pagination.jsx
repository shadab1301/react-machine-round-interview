import React from 'react'
import "./pagination.css"

const Pagination = ({perPage, currentPage, setCurrentPage, data}) => {
  const totalPage = Math.ceil(data.length / perPage);
  const paginationBtn = Array.from({length:totalPage}).map((_, i) => {
    return (
      <button
        className={`btn ${currentPage == i + 1 ? "active" : ""}`}
        onClick={(e)=>{
            setCurrentPage(e.target.value)
        }}
        value={i + 1}
      >
        {i + 1}
      </button>
    );
  });
  return <div>{paginationBtn}</div>;
};

export default Pagination