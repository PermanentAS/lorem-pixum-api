import React, { useState, useEffect } from "react";
import "./pagination.scss";

export const Pagination = ({ currentPage = 1, setCurrentPage }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (currentPage === 1) {
      setPages([currentPage, currentPage + 1, currentPage + 2]);
    } else {
      setPages([currentPage - 1, currentPage, currentPage + 1]);
    }
  }, [currentPage]);

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fas fa-angle-left"></i>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button ${currentPage === page && "active"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};
