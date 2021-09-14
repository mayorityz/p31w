import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Pages/Components/Navbar";
import Footer from "./Pages/Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Contact from "./Pages/Home/Contact";
import AdminHome from "./Pages/Admin/Index";
import ReadSinglePost from "./Pages/Components/SinglePost";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminHome />
        </Route>

        <Route path="/contactus">
          <Navbar />
          <Contact />
          <Footer />
        </Route>
        <Route path="/aboutus">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route path="/:slug">
          <Navbar />
          <ReadSinglePost />
          <Footer />
        </Route>
        <Route path="/" exact>
          <Navbar />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
