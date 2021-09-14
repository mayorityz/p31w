import React from "react";

const About = () => {
  return (
    <>
      <div class="banner-area">
        <img class="w-100" src="assets/img/about-me.jpg" alt="img" />
      </div>
      {/* <!-- Banner Area End --> */}

      {/* <!-- latest post Area Start--> */}
      <section class="about-area pd-top-70 pd-bottom-80">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="about-inner">
                <h2 class="text-center mb-4">About Me</h2>
                <p class="mb-3">
                  Nam rutrum suscipit orci ut ultrices. Sedarcu orci, quis augue
                  porta feugiat posuere nisi. Fusce fringilla ametiam sit
                  ameeque vitae elit condimentum auctor. Sed in turpis pulvinar,
                  euismod arcu condimentum, gravida nisi. Proin vitae elit
                  felis. Ut lobor tis elit arcu, at maximus dolor laoreet vel.
                  Vestibulum elementum sem libero, nec euismod velit ullamcorper
                  vitae.
                </p>
                <p class="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  aliquet euismod mi, ut pulvinar sem tincidunt ut. Nulla
                  finibus vehicula tortor, non tristique arcu scelerisque id.
                  Nulla facilisi. Suspendisse ut turpis orci. Sed viverra, odioc
                  rutrum tincidunt nibh lectus tempus erat, non tincidunt massa
                  odio sit amet ipsum. Fusce porttitor nisi eget finibus
                  consectetur. In eu facilisis ligula. Duis aliquet purus eget
                  nibh lacinia iaculis. Curabitur nec dignissim enim, ac auctor
                  magna lerisque augue ut blandit.
                </p>
                <p>
                  Nam quis quam tincidunt, interdum mauris nec, ultrices risus.
                  Phasellus semper, elit at hendrerit consectetur, erodio tempor
                  felis, id posuere nisl lectus vitae nulla. Fusce dictum, ex id
                  volutpat sagittis, erat lectus lacinia augu landit nisi ornare
                  finibus.
                </p>
                <ul class="social-area text-center mt-5">
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
                      <i class="fab fa-pinterest"></i>
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
        </div>
      </section>
    </>
  );
};

export default About;
