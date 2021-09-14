import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer-area text-center">
        <div class="footer-inner">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4">
                <div class="footer-widget widget">
                  <h4 class="widget-title">Follow me</h4>
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
              <div class="col-lg-4">
                <div class="footer-widget widget">
                  <div class="footer-logo d-inline-block">
                    <img src="assets/img/logo-2.png" alt="img" />
                  </div>
                  <p>
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                    auctor a ornare odio. Sed non mauris vitae erat consequat
                    auctor eu in elit. Class aptent taciti disse in orci enim.
                  </p>
                  <form>
                    <div class="single-input-wrap mb-0">
                      <input type="email" placeholder="Enter Email" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="footer-widget widget widget_link">
                  <h4 class="widget-title">Popular tags</h4>
                  <ul>
                    <li>
                      <a href="/">#SCRIPTURE</a>
                    </li>
                    <li>
                      <a href="/">#PRAYER</a>
                    </li>
                    <li>
                      <a href="/">#BUSINESS</a>
                    </li>
                    <li>
                      <a href="/">#FAMILY</a>
                    </li>
                    <li>
                      <a href="/">#GOALS</a>
                    </li>
                    <li>
                      <a href="/">#LIFE</a>
                    </li>
                    <li>
                      <a href="/">#GOALS</a>
                    </li>
                    <li>
                      <a href="/">#HELLO</a>
                    </li>
                    <li>
                      <a href="/">#MEETING</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="back-to-top">
        <span class="back-top">
          <i class="fas fa-angle-double-up"></i>
        </span>
      </div>
    </>
  );
};

export default Footer;
