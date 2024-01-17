import { useState } from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage, limit }) => {
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        {"<"}
      </button>
      <p>{page}</p>
      <button
        disabled={page === limit}
        onClick={() => setPage(page + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
