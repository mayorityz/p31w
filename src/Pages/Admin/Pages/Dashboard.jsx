import React from "react";
import { File, MessageSquare } from "react-feather";

const Dasboard = () => {
  return (
    <>
      <h4>Welcome Back!</h4>
      <hr />
      <div className="row mb-5">
        <div className="col-6">
          <div className="banner">
            <h4>No. Of Posts.</h4>
            <h6>15.</h6>
          </div>
        </div>
        <div className="col-6">
          <div className="banner">
            <h4>No. Of Replies.</h4>
            <h6>15.</h6>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 latest_posts">
          <h4>
            <File size={12} /> Latest Post.
          </h4>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <h6>Title Here!</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                odit rerum nemo? Aut iure temporibus cumque sunt...
              </p>
              <p>23|04|2021</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <h6>Title Here!</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                odit rerum nemo? Aut iure temporibus cumque sunt...
              </p>
              <p>23|04|2021</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 sidebar_posts">
          <h4>
            <MessageSquare size={12} /> Recent Comments
          </h4>
          <div className="row">
            <div className="col-md-6">
              <div className="comment">
                <h6>Abiodun Mayowa</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing ...{" "}
                  <a href="#">read more</a>
                </p>
              </div>
              <div className="comment">
                <h6>Abiodun Mayowa</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing ...{" "}
                  <a href="#">read more</a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h4>No. Of Posts</h4>
                <p>67</p>
              </div>
              <div>
                <h4>Total Comments</h4>
                <p>67</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dasboard;
