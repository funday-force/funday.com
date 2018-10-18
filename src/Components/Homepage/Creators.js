import React, { Component } from 'react';
import axios from 'axios';

// IMAGES
import hunter from '../../images/hunter.jpeg';
import larry from '../../images/Larry.jpg';
import arrow from '../../images/arrow.PNG';
import actionLeft from '../../images/action-left.PNG';
import actionRight from '../../images/action-right.PNG';
import funday from '../../images/funday-force-logo.jpg';
import fundayBlack from '../../images/funday-force-black.jpg';

export default class Creators extends Component {
  constructor() {
    super();

    this.state = {
      email: ''
    };
  }

  handleEmail(val) {
    this.setState({
      email: val
    });
  }

  handleSubmit = async e => {
    await axios
      .post('http://localhost:3010/send-email')
      .then(function(response) {
        console.log(response);
        this.setState({
          email: ''
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="creators">
        <div className="creators-section my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <h1 className="text-center">
                  Find out what these <span className="teams-span">teams</span>{' '}
                  already know
                </h1>

                <div className="images-container my-5">
                  <div className="creators-images">
                    <img src={hunter} alt="hunter" className="img-fluid" />
                    <h5 className="text-center">Hunter Luker</h5>
                    <img className="img-fluid" src={funday} alt="" />
                  </div>
                  <div className="creators-images">
                    <img
                      src="https://avatars3.githubusercontent.com/u/40406485?s=400&v=4"
                      alt="tessa"
                      className="img-fluid"
                    />
                    <h5 className="text-center">Tessa Coddington</h5>
                    <img className="img-fluid" src={fundayBlack} alt="" />
                  </div>
                  <div className="creators-images">
                    <img src={larry} alt="larry" className="img-fluid" />
                    <h5 className="text-center">Larry Guerra</h5>
                    <img className="img-fluid" src={funday} alt="" />
                  </div>
                  <div className="creators-images">
                    <img
                      src="https://avatars0.githubusercontent.com/u/37302727?s=400&v=4"
                      alt="jace"
                      className="img-fluid"
                    />
                    <h5 className="text-center">Jace Holdaway</h5>
                    <img className="img-fluid" src={fundayBlack} alt="" />
                  </div>
                </div>
              </div>

              <div className="signup-section mx-auto mb-5">
                <img className="img-fluid" src={arrow} alt="" />
                <h1>
                  Workflow made simple.{' '}
                  <span className="text-success">Try it for free.</span>
                </h1>

                <form onSubmit={this.handleSubmit}>
                  <img src={actionLeft} alt="action-left" className="mr-3" />
                  <img src="" alt="" />
                  <input
                    id="email"
                    name="email"
                    value={this.state.email}
                    className="form-input"
                    type="text"
                    placeholder="Enter your work email"
                    onChange={e => this.handleEmail(e.target.value)}
                    required
                  />
                  <button className="form-button btn">
                    Create free account
                  </button>
                  <img src={actionRight} alt="action-left" className="ml-3" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
