import React from "react";

const Contact = () => {
  return (
    <>
      <div class="banner-logo-area">
        <img src="assets/img/logo.png" alt="img" />
      </div>
      <div class="banner-area">
        <div class="container">
          <img src="assets/img/contact.jpg" alt="img" />
        </div>
      </div>
      <section class="about-area pd-top-70 pd-bottom-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="about-inner">
                <h2 class="text-center mb-4">Contact</h2>
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
                  Nam quis quam tincidunt, interdum mauris nec, ultrices risus.
                  Phasellus semper, elit at hendrerit consectetur, erodio tempor
                  felis, id posuere nisl lectus vitae nulla. Fusce dictum, ex id
                  volutpat sagittis, erat lectus lacinia augu landit nisi ornare
                  finibus.
                </p>

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
                    <div class="col-md-12 text-center">
                      <input
                        type="submit"
                        value="Send Message"
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

export default Contact;
