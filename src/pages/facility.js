import React from 'react';

import Layout from '../components/Layout';

import ScrollUpButton from "react-scroll-up-button";

import jump from '../assets/images/jumps.jpg'
import pen from '../assets/images/Pen.jpg'
import breeze from '../assets/images/breezeway.jpg'
import wash from '../assets/images/washrack.jpg'


const IndexPage = () => (
  <Layout activeLink="facility">
        <ScrollUpButton />
    <section className="page-section">
      <div className="container">
        <div className=" d-flex">
          <div className="bg-faded p-4 d-flex m-auto rounded ">
            <h2 className="section-heading mb-0 ">
              <span className="display-4 ">
                Our Facility
                </span>
            </h2>
          </div>
        </div>
        <img
          className="mx-auto d-flex rounded contact-img pt-3 mb-3 mb-lg-0"
          src={jump}
          alt="Sand arena with stadium jumps for all horse boarders use"
          
        />
        <div className="product-item-description d-flex mr-auto">
          <div className="bg-faded p-3 rounded">
            <ul className="facility">
              <li>150'x 300' Sand Arena</li>
              <li>60' Sand Round Pen</li>
              <li>Access to Barrels, Stadium Jumps and Obstacles</li>
              <li>Trail riding directly off property</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section">
      <div className="container">

        <img
          className="mx-auto d-flex rounded contact-img mb-3 mb-lg-0"
          src={pen}
          alt="One of the many pens with boarding horses eating out of hay hut"
          
        />
        <div className="product-item-description d-flex mr-auto">
          <div className="bg-faded p-3 rounded">
            <ul className="facility">
              <li>Free Choice Hay</li>
              <li>Bayco Fencing</li>
              <li>Automatic Waters</li>
              <li>Individual and Group Pen Options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section">
      <div className="container">

        <img
          className="mx-auto d-flex rounded contact-img mb-3 mb-lg-0"
          src={breeze}
          alt="The breezeway in the main barn where the bathroom is accessible for boarders"
          
        />
        <div className="product-item-description d-flex ml-auto">
          <div className="bg-faded p-3 rounded">
            <ul className="facility">
              <li>Multiple Locking Tack Rooms</li>
              <li>Indoor Grooming Area</li>
              <li>Outdoor Wash Rack</li>
              <li>Bathroom</li>
              <li>Trailer Parking</li>
              <li>Automatic Entry Gate</li>
            </ul>
          </div>
        </div>
        <img
          className="mx-auto d-flex rounded contact-img mb-3 mb-lg-0"
          src={wash}
          alt="Our washrack is wide and has pea gravel footing for safety of the horse"
          
        />
      </div>
    </section>

  </Layout >
);

export default IndexPage;
