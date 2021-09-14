import React from "react";

const MainSideBar = () => {
  return (
    <div class="col-lg-3 col-md-4">
      <div class="sidebar-area text-center">
        <div class="widget widget_author_bio p-0 border-0">
          <div class="thumb">
            <img src="assets/img/widget/bio.jpg" alt="img" />
          </div>
          <div class="bio-data">
            <h4>CEO</h4>
            <h2>Abiodun Mayowa</h2>
          </div>
        </div>
        <div class="widget widget-subscribe-form">
          <h2 class="widget-title">Subscribe</h2>
          <p>Get P31W Straight Your Inbox.</p>
          <div class="single-input-wrap">
            <input type="email" placeholder="Enter email" />
          </div>
        </div>
        <div class="widget author-insta-bio p-0 border-0">
          <div class="thumb">
            <img src="assets/img/widget/insta_widget.jpg" alt="img" />
          </div>
          <div class="insta-bio-data">
            <h4>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </h4>
            <h2>Instagram</h2>
            <a href="#" class="insta-link">
              @p31wblog
            </a>
          </div>
        </div>
        <div class="widget social-widget">
          <h2 class="widget-title">Follow me</h2>
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
        <div class="widget ads-widget p-0 border-0">
          <div class="thumb">
            <a href="#">
              <img src="assets/img/widget/ads.jpg" alt="img" />
            </a>
          </div>
        </div>
        <div class="widget category-widget">
          <h2 class="widget-title">Categories</h2>
          <div class="cat-name-list">
            <ul>
              <li>
                <a href="#">PRAYER</a>
              </li>
              <li>
                <a href="#">SCRIPTURE</a>
              </li>
              <li>
                <a href="#">Health</a>
              </li>
              <li>
                <a href="#">BUSINESS IDEAS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
