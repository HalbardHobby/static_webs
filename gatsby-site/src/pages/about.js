import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>Some stuff about stuff.</p>
    <p>Need something? <Link to="/contact">Contact me.</Link></p>
  </Layout>
);

export default AboutPage;