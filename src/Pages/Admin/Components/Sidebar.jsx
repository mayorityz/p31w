import React from "react";
import {
  ArrowRightCircle,
  File,
  Home,
  LogOut,
  MessageCircle,
  Settings,
} from "react-feather";
import { Link, useRouteMatch } from "react-router-dom";
import Logo from "./../../../images/logo.png";

const Sidebar = () => {
  const { url } = useRouteMatch();
  return (
    <div className="__sidebar">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to={url}>
            <Home className="icon_menu" /> Home{" "}
            <ArrowRightCircle className="icon_menu arrow" />
          </Link>
        </li>
        <li>
          <Link to={`${url}/posts`}>
            <File className="icon_menu" /> My Posts{" "}
            <ArrowRightCircle className="icon_menu arrow" />
          </Link>
        </li>
        <li>
          <a href="#">
            <MessageCircle className="icon_menu" /> Replies{" "}
            <span className="notification">3</span>
            <ArrowRightCircle className="icon_menu arrow" />
          </a>
        </li>
        <li>
          <Link to={`${url}/category`}>
            <Settings className="icon_menu" /> Categories
            <ArrowRightCircle className="icon_menu arrow" />
          </Link>
        </li>
        <li>
          <a href="#">
            <Settings className="icon_menu" /> Settings
            <ArrowRightCircle className="icon_menu arrow" />
          </a>
        </li>
        <li>
          <a href="#">
            <LogOut className="icon_menu" /> Logout
            <ArrowRightCircle className="icon_menu arrow" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
