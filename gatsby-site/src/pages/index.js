import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>Hello, World!</h1>
    <p>Need something? <Link to='/contact'>Contact me.</Link></p>
  </Layout>
)