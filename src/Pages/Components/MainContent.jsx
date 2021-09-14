import React, { useState, useEffect } from "react";
import HttpServices from "./../../Utilities/HttpServices";
import SinglePost from "./Post";

const MainContent = () => {
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
    <div class="col-lg-9 col-md-8">
      <div class="row">
        {posts.map((post) => (
          <SinglePost data={post} key={post._id} />
        ))}
        <div class="col-lg-12">
          <div class="pagination-area">
            <a href="single.html">Older post</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
