import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => (
  <div>
    <Header />
    <h1>About</h1>
    <p>Some stuff about stuff.</p>
    <p>Need something? <Link to="/contact">Contact me.</Link></p>

    <Footer />
  </div>
);

export default AboutPage;