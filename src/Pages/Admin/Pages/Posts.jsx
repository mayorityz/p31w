import React, { useState, useEffect } from "react";
import { Clock, Edit2, FileText, Trash } from "react-feather";
import { useRouteMatch, Link } from "react-router-dom";
import HttpServices from "./../../../Utilities/HttpServices";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let HTTP = new HttpServices("/post/allposts", {});
      let response = await HTTP.get();
      if (response.status) setPosts(response.data);

      setLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div>Fetching Posts! Please Wait!!</div>;
  }

  return (
    <div className="container">
      <h3>Existing Posts</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-8 p-2">
          <Link
            to={`/admin/create-post`}
            // style={{ height: 40, lineHeight: 40 }}
            className="btn btn-success btn-xs"
          >
            Create New Post
          </Link>
          <br />
          <br />

          {posts.length === 0 && (
            <div>
              <p>No Posts Found!</p>
            </div>
          )}

          {posts.length && (
            <table
              className="table table-striped table-hover table-sm table-borderless"
              id="post_table"
            >
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>
                    <FileText size={12} /> Title
                  </th>
                  <th>
                    <Clock size={12} /> Date Posted
                  </th>
                  <th>
                    <Edit2 size={12} /> Action
                  </th>
                  <th>
                    <Trash size={12} /> Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <span className="inner_text">{post.title}</span>
                    </td>
                    <td>
                      <span className="inner_text">{post.createdAt}</span>
                    </td>
                    <td>
                      <Link
                        to={`/admin/edit-post/${post.slug}`}
                        className="btn btn-sm btn-warning"
                      >
                        <Edit2 size={10} />
                        edit
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-danger">
                        <Trash size={10} />
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
