import React from "react";

const Posts = ({ post, loading, handleCancel, toggle }) => {
  return (
    <div className="container my-4">
      {toggle ? (
        <div class="row row-cols-1  g-4">
          {post.map((post) => (
            <div class="col" key={post.id}>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  class="card shadow border-0 w-100"
                  style={{ borderRadius: "10px" }}
                >
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.body}</p>
                  </div>
                </div>
                <span
                  onClick={() => handleCancel(post.id)}
                  className="shadow p-3 ms-2 bg-white"
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                >
                  X
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {post.map((post) => (
            <div class="col" key={post.id}>
              <div class="card h-100">
                <div class="card-body">
                  <div className="d-flex justify-content-around ">
                    {" "}
                    <h5 class="card-title">{post.title}</h5>
                    <span
                      onClick={() => handleCancel(post.id)}
                      className="shadow p-2 bg-white"
                      style={{ borderRadius: "50%", cursor: "pointer" }}
                    >
                      x
                    </span>
                  </div>
                  <p class="card-text">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
