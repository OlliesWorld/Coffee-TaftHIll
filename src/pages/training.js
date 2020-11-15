import React from 'react';

import Layout from '../components/Layout';


import cayla from '../assets/images/cayla.jpg';
import caylacross from '../assets/images/caylacross.jpg'
import wrlogo from '../assets/images/wr_logo_web.png'

const IndexPage = () => (
  <Layout activeLink="training">
    <section className="page-section">
      <div className="container">
        <div className=" d-flex">
          <div className="bg-faded p-2 d-flex ml-auto rounded">
            <h2 className="section-heading mb-0">
              <span className="section-heading-upper">
                Cayla Stone
                </span>
              <span className="section-heading-lower">
                Taft Hill Acres Trainer in Resident
              </span>
            </h2>
          </div>
        </div>
        <img
          className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
          src={cayla}
          alt=""
        />
        <div className="product-item-description d-flex mr-auto">
          <div className="bg-faded p-2 rounded">
            <p className="mb-0 paragraph">
              Cayla has a particular love and interest in promoting Mustangs in the english riding disciplines and has become well-known as a Mustang trainer. She is a graduate of the CSU Equine Science program, a two-time finalist in the Extreme Mustang Makeover Competition, an established TIP trainer, and Eventing Trainer. Over the last six years, Cayla has trained or assisted in the training of over 30 Mustangs. This is a huge feat given that she only has one or two in training at any given time! Cayla believes that the more awareness she can bring to the versatility of the breed, the more adoptable these horses will become. Cayla shows her 2016 Mustang Makeover 5th place finisher, Atalanta in Eventing and won 10th place at the 2018 American Eventing Championships. Cayla also won the overall award for best adult pony rider.
              </p>
          </div>

        </div>

      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-3 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Wild Rose Mustang Advocacy Group
                </span>

                <span className="section-heading-lower">
                  From Wild to Mild
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={caylacross}
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-3 rounded">
              <p className="mb-0 paragraph">We believe in ensuring that every adoptable Mustang off the range receives excellent healthcare and individualized training to find a forever home.
              </p>

              <p className="mb-0 paragraph">
                Our goal is to help change the story of American Mustangs in the West by providing professional under saddle training and increase adoptions of these amazing horses.
              </p>
              <div className="mt-2 text-center">
                <a className="btn" href="https://www.wildrosemagic.org/" target="/">

                  <img
                    className="wr-logo"
                    src={wrlogo}
                    alt=""
                  />
                </a>
                <p className="mx-5 px-1 option-three"> Click for More Information</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>



  </Layout >
);

export default IndexPage;
