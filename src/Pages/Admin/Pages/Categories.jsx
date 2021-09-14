import React, { useState, useEffect } from "react";
import HttpServices from "./../../../Utilities/HttpServices";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isFetching, setFetch] = useState(true);

  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      let http = new HttpServices("/categories/allcategories", {});
      let response = await http.get();
      if (response.status) setCategories(response.data);
      setFetch(false);
    })();
  }, []);

  const createCategory = async (e) => {
    e.preventDefault();
    setMessage("Saving Categories!");
    let http = new HttpServices("/categories/createCategory", {
      title: category,
    });
    let post = await http.post();
    if (post.status) setMessage("Category Created Successfully!");
    else {
      setMessage("Category Already Exists!!!");
    }
    console.log(post);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4 className="text-center">Create New Category.</h4>
          <hr />
          <form action="" onSubmit={createCategory}>
            <div className="mb-1">
              <label htmlFor="">Category Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Category Title"
                required
                value={category}
                onChange={({ target: { value } }) => setCategory(value)}
              />
            </div>
            {message && <div>{message}</div>}
            <button className="btn btn-warning btn-sm">Create Category</button>
          </form>

          <div className="mt-5">
            <h6 className="text-center">Existing Categories!</h6>
            <hr />
            {isFetching ? (
              <h4 className="text-center">Fetching Data!</h4>
            ) : categories.length === 0 ? (
              <h6 className="text-center">No Categories Found!</h6>
            ) : (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Title</th>
                    <th>Slug</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{category.title}</td>
                      <td>{category.slug}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
