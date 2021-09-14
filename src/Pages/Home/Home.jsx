import React from "react";
import Banner from "../Components/Banner";
import Logo from "../Components/Logo";
import MainContent from "../Components/MainContent";
import MainSideBar from "../Components/MainSideBar";

const Home = () => {
  return (
    <>
      <Logo />
      <Banner />
      <section class="latest-post-area pd-top-115 pd-bottom-110">
        <div class="container">
          <div class="row">
            <MainContent />
            <MainSideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
