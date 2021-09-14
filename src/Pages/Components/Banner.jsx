import React from "react";

const Banner = () => {
  return (
    <section class="banner-area">
      <div class="banner-slider-2 owl-carousel">
        <div
          class="item"
          style={{ background: "url(assets/img/banner/slider-1.jpg)" }}
        >
          <div class="banner-inner">
            <h4>Prayer Room</h4>
            <h2>Knees to the throne.</h2>
            <a href="single.html" class="btn readmore-button">
              Read more
            </a>
          </div>
        </div>
        <div
          class="item"
          style={{ background: "url(assets/img/banner/slider-2.jpg)" }}
        >
          <div class="banner-inner">
            <h4>Message</h4>
            <h2>Read and be blessed</h2>
            <a href="single.html" class="btn readmore-button">
              Read more
            </a>
          </div>
        </div>
        <div
          class="item"
          style={{ background: "url(assets/img/banner/slider-3.jpg)" }}
        >
          <div class="banner-inner">
            <h4>Scripture Of the day.</h4>
            <h2>Dining Room Reveal</h2>
            <a href="single.html" class="btn readmore-button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
