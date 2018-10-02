import React, { Component } from 'react';

import car1 from '../../images/carousel-1.webp';
import car3 from '../../images/carousel-2.webp';
import car2 from '../../images/carousel-3.webp';

import actionLeft from '../../images/action-left.PNG';
import actionRight from '../../images/action-right.PNG';

export default class Hero extends Component {
  render() {
    return (
      <div className="container">
        <div className="hero-container">
          <h1 className="display-4">
            A new way to manage your <span>task</span>
          </h1>
          <p className="hero-p">
            Plan. Organize. Track. In one visual, collaborative space.
          </p>

          <form action="">
            <img src={actionLeft} alt="action-left" className="mr-3" />
            <input
              className="form-input"
              type="text"
              placeholder="Enter your work email"
            />
            <button className="form-button btn">Create free account</button>
            <img src={actionRight} alt="action-left" className="ml-3" />
          </form>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto car">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active car1">
                  <img className="d-block w-100" src={car1} alt="First slide" />
                </div>
                <div className="carousel-item car2">
                  <img
                    className="d-block w-100"
                    src={car2}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item car3">
                  <img className="d-block w-100" src={car3} alt="Third slide" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
