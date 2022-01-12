import React from "react";

const Pagination = ({ postPerpage, totalPost,paginate }) => {
  const pageNymbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerpage); i++) {
    pageNymbers.push(i);
  }
  return (
    <div className="container">
      {/* <div className="mx-auto"> */}
      <nav aria-label="Page navigation example" className="d-flex justify-content-center">
        <ul className="pagination">
          {pageNymbers.map((number) => (
            <li className="m-1">
              <a onClick={()=>paginate(number)} className="page-link border-0 shadow" href="#" style={{borderRadius:'50%'}}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default Pagination;
