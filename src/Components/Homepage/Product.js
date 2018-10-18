import React, { Component } from 'react';
import './Homepage.css';

export default class Product extends Component {
  render() {
    return (
      <div id="uses-page">
        <div className="product-section">
          <div className="container product-container">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="product-1">
                  <div className="product-desc">
                    <p>Simple and intuitive</p>
                    <h2>Easy onboarding, fast adoption</h2>
                    <p>
                      Getting your team on board is as simple as sending an
                      email. Getting them hooked is as simple as letting them
                      use it.
                    </p>
                  </div>
                  <div className="product-video">
                    <video
                      src="https://monday.com/static/video/main/invite-users/invite-users.mp4"
                      preload="auto"
                      muted
                      autoPlay
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 mx-auto">
                    <div className="product-2">
                      <div className="product-video-2">
                        <video
                          src="https://monday.com/static/video/main/customize/customize.mp4"
                          preload="auto"
                          muted
                          autoPlay
                        />
                      </div>
                      <div className="product-desc-2">
                        <p>Flexible and versatile</p>
                        <h2>Customize your workflow</h2>
                        <p>
                          Different teams need different things at different
                          times, so flexibility is key. Manage any workflow or
                          process and be ready to address any challenge from the
                          simple to the not-so-simple with total ease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="product-section">
          <div className="container product-container">
            <div className="row">
              <div className="col-8-md mx-auto">
                <div className="product-desc">
                  <p>Simple and intuitive</p>
                  <h2>Easy onboarding, fast adoption</h2>
                  <p>
                    Getting your team on board is as simple as sending an email.
                    Getting them hooked is as simple as letting them use it.
                  </p>
                </div>
                <div className="product-video">
                  <video
                    src="https://monday.com/static/video/main/invite-users/invite-users.mp4"
                    preload="auto"
                    muted
                    autoPlay
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-8-md mx-auto">
                  <div className="container product-container-2">
                    <div className="product-video">
                      <video
                        src="https://monday.com/static/video/main/customize/customize.mp4"
                        preload="auto"
                        muted
                        autoPlay
                      />
                    </div>
                    <div className="product-desc-2">
                      <p>Flexible and versatile</p>
                      <h2>Customize your workflow</h2>
                      <p>
                        Different teams need different things at different
                        times, so flexibility is key. Manage any workflow or
                        process and be ready to address any challenge from the
                        simple to the not-so-simple with total ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
