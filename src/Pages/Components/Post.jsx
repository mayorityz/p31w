import React from "react";
import { Link } from "react-router-dom";

const cleanString = (string, length) => {
  let trimmedText = string.slice(0, length);
  return trimmedText;
};
const SinglePost = ({ data }) => {
  return (
    <>
      <div class="col-lg-6">
        <div class="thumb pb-lg-3 pb-5">
          <img class="w-100" src="assets/img/post/5.jpg" alt="img" />
        </div>
        <div class="blog-post-item-wrap">
          <div class="post-content">
            <h6>{data.category}</h6>
            <h4>
              <Link to={data.slug}>{cleanString(data.title, 25)} ...</Link>
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: cleanString(data.content, 60),
              }}
            ></div>
            <div class="post-meta">
              <ul>
                <li>By</li>
                <li>
                  <a href="#">Admin</a>
                </li>
                <li>{data.createdAt}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
