import React, { Component } from 'react';
import logo from '../../images/fundaylogo.png';
import $ from 'jquery';
import './Homepage.css';

// COMPONENTS
import Hero from './Hero';
import Product from './Product';
import GetToWork from './GetToWork';
import Creators from './Creators';
import Footer from './Footer';

export default class Homepage extends Component {
  render() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $('.navbar').addClass('nav-scroll');
      }
    }); //missing );
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-sm transparent">
          <div className="container">
            <div className="navbar-brand">
              <a href="#">
                <img width="215" src={logo} alt="logo" />
              </a>
            </div>

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

              <li className="nav-item login-btn">
                <a href="#" className="nav-link">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Hero />
        <Product />
        <GetToWork />
        <Creators />
        <Footer />
      </div>
    );
  }
}
