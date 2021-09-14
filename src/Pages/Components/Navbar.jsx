import React from "react";
import { Link } from "react-router-dom";
import SideBarNav from "./SideBarNav";

const Navbar = () => {
  return (
    <>
      <div class="preloader" id="preloader">
        <div class="preloader-inner">
          <div id="wave1"></div>
          <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
          </div>
        </div>
      </div>
      {/* <!-- preloader area end --> */}
      <div class="body-overlay" id="body-overlay"></div>

      {/* <!-- search popup area start --> */}
      <div class="search-popup" id="search-popup">
        <form action="/" class="search-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search....." />
          </div>
          <button type="submit" class="submit-btn">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      {/* side bar nav */}
      <SideBarNav />

      {/* navigation */}
      <header class="navbar-area">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid nav-container">
            <div class="responsive-mobile-menu">
              <button
                class="menu toggle-btn d-block d-lg-none"
                data-target="#themefie_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="icon-left"></span>
                <span class="icon-right"></span>
              </button>
            </div>
            <div class="lawel-header-left">
              <div class="side-menu-bar d-inline-flex">
                <i id="side-menu-open" class="fa fa-bars"></i>
              </div>
              <a href="/" class="logo">
                <img src="assets/img/logo.png" alt="img" />
              </a>
              <div class="nav-right-part">
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
                    <a class="search" href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse navbar-collapse" id="themefie_main_menu">
              <ul class="navbar-nav menu-open text-center">
                <li class="current-menu-item">
                  <Link to="/">HOME</Link>
                </li>
                <li class="current-menu-item">
                  <a href="/">FAMILY</a>
                </li>
                <li class="current-menu-item">
                  <a href="/">BUSINESS PLANS</a>
                </li>
                <li>
                  <Link to="/aboutus">ABOUT</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <a href="#">LOGIN</a>
                </li>
              </ul>
            </div>
            <div class="nav-right-part text-end nav-right-part-desktop">
              <ul>
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
                  <a class="search" href="#">
                    <i class="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* end of navbar */}
    </>
  );
};

export default Navbar;
