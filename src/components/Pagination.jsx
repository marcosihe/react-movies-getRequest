import React from "react";
import { Link } from 'react-router-dom';

const Pagination = (props) => {
  const { currentPage, total, onChange } = props;

  const getPages = () => {
    const result = [];
    for (let i = 0; i < total; i++) {
      let page = i + 1;
      result.push(
        <Link
          onClick={() => onChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </Link>
      );
    }
  };
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>Page {currentPage} of {total}</span>
        {getPages()}
      </div>
    </div>
  );
};

export default Pagination;
