import React from "react";
const SideBarNav = () => {
  return (
    // <!-- navbar start -->
    <div id="side-navbar" class="side-navbar">
      <i id="side-menu-close" class="fa fa-times"></i>
      <ul class="side-navbar-items">
        <li class="menu-item-has-children">
          Home
          <ul class="sub-menu ps-0">
            <li>
              <a href="home-1.html">Home 01</a>
            </li>
            <li>
              <a href="home-2.html">Home 02</a>
            </li>
            <li>
              <a href="/">Home 03</a>
            </li>
            <li>
              <a href="home-4.html">Home 04</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarNav;
