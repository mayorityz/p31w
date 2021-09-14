import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HttpServices from "./../../Utilities/HttpServices";

const ReadSinglePost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      let HTTP = new HttpServices("/post/readpost", { slug });
      let response = await HTTP.post();
      if (response.status) setPost(response.data[0]);
      setLoading(false);
    })();
  }, [slug]);

  if (isLoading) {
    return <div>Fetching Post!!!</div>;
  }

  if (!post) {
    return <div>Post Not Found!!!</div>;
  }

  return (
    <>
      <div class="banner-logo-area border-bottom">
        <img src="assets/img/logo.png" alt="img" />
      </div>
      <section class="latest-post-area pd-top-100 pd-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="thumb me-lg-4 mb-lg-0 mb-5">
                <img
                  class="w-100"
                  src="assets/img/post/single-2.png"
                  alt="img"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="blog-post-item-wrap mb-0">
                <div class="post-content pt-1">
                  <h6>{post.category}</h6>
                  <h2>
                    <a href="#">{post.title}</a>
                  </h2>
                  <div class="post-meta mb-3">
                    <ul>
                      <li>By</li>
                      <li>
                        <a href="#">Alison morgan</a>
                      </li>
                      <li>{post.createdAt}</li>
                    </ul>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="single-post-footer">
                <div class="row">
                  <div class="col-lg-6 col-md-4 col-sm-5">
                    <ul class="social-area">
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="blog-about-author d-flex">
                <div class="thumb">
                  <img src="assets/img/author.png" alt="img" />
                </div>
                <div class="author-info">
                  <h4 class="author-name">
                    <a href="#">Alison Morgan</a>
                  </h4>
                  <p class="author-content">
                    Mauris massa nisi, viverra ac sapien, tempor auctor tempus
                    pulvinar varius vestibulum. Sed pellen tesque quis sem eget
                    euismod. Duis ut risus consectetur justo euismod viverra in
                    purus.{" "}
                  </p>
                </div>
              </div>
              {/* <div class="post-pagination">
                <div class="other-post">
                  <i class="fa fa-angle-left"></i>
                  <div class="media-body">
                    <h5>
                      <a href="#" title="">
                        Designer Swimsuit{" "}
                      </a>
                    </h5>
                    <p>
                      <a href="#">previous post</a>
                    </p>
                  </div>
                </div>
                <div class="other-post">
                  <div class="media-body">
                    <h5>
                      <a href="#" title="">
                        Sugar Regulation
                      </a>
                    </h5>
                    <p>
                      <a href="#">next post</a>
                    </p>
                  </div>
                  <i class="fa fa-angle-right"></i>
                </div>
              </div>
               */}
              {/* <div class="related-post-area">
                <h3 class="title">You May Also Like</h3>
                <div class="row">
                  <div class="col-lg-3 col-sm-6">
                    <div class="related-item-wrap text-center">
                      <div class="thumb">
                        <img src="assets/img/recent/1.png" alt="img" />
                      </div>
                      <div class="wrap-details">
                        <h4>
                          <a href="#">Jeans Like Supermo</a>
                        </h4>
                        <span class="date">May 14, 2017</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="related-item-wrap text-center">
                      <div class="thumb">
                        <img src="assets/img/recent/2.png" alt="img" />
                      </div>
                      <div class="wrap-details">
                        <h4>
                          <a href="#">Greetings From Berlin</a>
                        </h4>
                        <span class="date">May 20, 2020</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="related-item-wrap text-center">
                      <div class="thumb">
                        <img src="assets/img/recent/3.png" alt="img" />
                      </div>
                      <div class="wrap-details">
                        <h4>
                          <a href="#">Wear Lowaist Pants </a>
                        </h4>
                        <span class="date">May 24, 2021</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="related-item-wrap text-center">
                      <div class="thumb">
                        <img src="assets/img/recent/4.png" alt="img" />
                      </div>
                      <div class="wrap-details">
                        <h4>
                          <a href="#">Atlantis - Lunch in Nobu </a>
                        </h4>
                        <span class="date">May 24, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               */}
              <div class="comments-inner-wrap">
                <h3 class="comments-title mb-0">
                  {post.responses.length} Comments
                </h3>
                <ul class="commentlist">
                  <li class="comment">
                    <div class="comment-box">
                      <div class="comment-author">
                        <a href="single.html#">
                          <img src="assets/img/commentor.png" alt="img" />
                        </a>
                      </div>
                      <div class="comment-body">
                        <h2>
                          <a href="single.html#">Ward Torres</a>
                        </h2>
                        <p>
                          Pellentesque nibh libero, consequat at nibh a,
                          tincidunt rutrum magna. Curabitur in posuere risus,
                          dictum euismod dolor. Vestibulum auctor orci sed elit
                          ultricies tempus. Praesent facilisis tellus turpis, ac
                          congue lorem consectetur ac.
                        </p>
                      </div>
                      <div class="comment-reply">
                        <a href="single.html#" class="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <h3 class="comments-title mt-5">Leave A Reply</h3>
                <form class="comment-form">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="single-input-wrap">
                        <input type="text" placeholder="NAME" />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="single-input-wrap">
                        <input type="email" placeholder="EMAIl" />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="single-input-wrap">
                        <input type="text" placeholder="WEBSITE" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="single-input-wrap d-flex">
                        <textarea placeholder="ADD A COMMENT"></textarea>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <input
                        type="submit"
                        value="Post Comment"
                        class="submit-btn btn btn-base"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadSinglePost;
