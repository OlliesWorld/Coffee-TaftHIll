import React from 'react';

import Layout from '../components/Layout';
import Slider from '../components/slides';

const TestimonialPage = () => (
    <Layout activeLink="testimonial">
        <section className="container mt-5">
            <Slider />

        </section>

    </Layout >
);

export default TestimonialPage;