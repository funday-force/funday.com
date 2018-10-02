import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer bg-light mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mx-auto my-5">
                <div className="left-footer">
                  <img
                    style={{ width: '50px' }}
                    src="https://lh3.googleusercontent.com/-GMnqdh83HhQ/Wgiqf3c30eI/AAAAAAAAAG4/arGBbW7vR5gHPSNTEcOb-zmBx_NhxUuDACLcBGAs/s400/original-favicon_diecut_256.png"
                    alt=""
                    className="mb-2"
                  />
                  <p style={{ fontSize: '.9rem' }}>All rights reserved</p>
                  <p style={{ fontSize: '.9rem' }}>&copy; funday.com</p>
                  <p style={{ fontSize: '.9rem' }}>+1 (555) 555-5555</p>
                  <p style={{ marginTop: '100px' }}>
                    Made with{' '}
                    <img
                      src="https://monday.com/static/img/heart_small.png"
                      alt="heart"
                    />{' '}
                    by the funday-force
                  </p>
                </div>

                <div className="right-footer">
                  <nav className="footer-nav navbar-expand-sm transparent bg-light">
                    <div className="container">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                          <a href="#product" className="nav-link product">
                            Product
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#uses" className="nav-link use-cases">
                            Use Cases
                          </a>
                        </li>

                        <li className="nav-item">
                          <a href="#why" className="nav-link why">
                            Why funday.com
                          </a>
                        </li>

                        <li className="nav-item">
                          <a href="#creators" className="nav-link creators">
                            Creators
                          </a>
                        </li>
                      </ul>
                      <div className="legal">
                        <p style={{ fontSize: '.9rem', fontWeight: '700' }}>
                          Legal, Security & Privacy
                        </p>
                        <img
                          className="mr-2"
                          src="https://res.cloudinary.com/dapulse/image/upload/f_auto/remote_mondaycom_static/img/footer/iso-logo1.png"
                          alt=""
                          style={{
                            width: '40px'
                          }}
                        />
                        <img
                          className="mr-2"
                          src="https://res.cloudinary.com/dapulse/image/upload/f_auto/remote_mondaycom_static/img/footer/gdpr-logo.png"
                          alt=""
                          style={{
                            width: '40px'
                          }}
                        />
                        <img
                          src="https://res.cloudinary.com/dapulse/image/upload/f_auto/remote_mondaycom_static/img/footer/soc-logo.png"
                          alt=""
                          style={{
                            width: '40px'
                          }}
                        />
                      </div>
                      <i
                        className="fa fa-github-square"
                        style={{
                          fontSize: '25px',
                          lineHeight: '1.5',
                          marginTop: '100px',
                          marginRight: '10px',
                          float: 'right'
                        }}
                      />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
