import React, { useState, useEffect } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import HttpServices from "./../../../Utilities/HttpServices";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");

  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      let HTTP = new HttpServices("/post/readpost", { slug });
      let response = await HTTP.post();
      if (response.status) {
        let data = response.data[0];
        setTitle(data.title);
        setContent(data.content);
      }
      setLoading(false);
    })();
  }, [slug]);

  const submitPost = async (e) => {
    e.preventDefault();
    setNotification("Processing. Please Wait!");
    let service = new HttpServices("/post/editpost", {
      title,
      category,
      content,
      slug,
    });

    let response = await service.post();
    if (response.status) setNotification("Edit Submitted Successfully!");
    else setNotification("An Error Occured! Please Try Again!");
  };

  let modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  if (isLoading) {
    return <div>Fetching Post!!!</div>;
  }

  if (!post) {
    return <div>Post Not Found!!!</div>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center">Edit Post.</h3>
          <hr />
          <form action="" onSubmit={submitPost}>
            <div className="mb-3">
              <label htmlFor="">Enter Post Title :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Post Title"
                value={title}
                onChange={({ target: { value } }) => setTitle(value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Select Post Category :</label>
              <select
                className="form-control"
                required
                value={category}
                onChange={({ target: { value } }) => setCategory(value)}
              >
                <option value="">-- Select A Category --</option>
                <option value="writing">-- Writing --</option>
                <option value="parenting">-- Parenting --</option>
                <option value="self development">-- Self Development --</option>
                <option value="history">-- History --</option>
                <option value="politics">-- Politics --</option>
                <option value="women">-- Women --</option>
                <option value="faith">-- Faith --</option>
                <option value="music">-- Music --</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="">Enter Content :</label>
              <ReactQuill
                value={content}
                modules={modules}
                onChange={(e) => setContent(e)}
                style={{ height: 160, marginBottom: 70 }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Blog Thumbnail.</label>
              <input type="file" name="" />
            </div>
            {notification && (
              <p style={{ textAlign: "center" }}>{notification}</p>
            )}
            <button className="btn btn-success">Submit Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
