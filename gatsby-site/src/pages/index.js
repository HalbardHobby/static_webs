import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/footer'
import Header from '../components/header' 

export default () => (
  <div>
    <Header />
    <h1>Hello, World!</h1>
    <p>Need something? <Link to='/contact'>Contact me.</Link></p>

    <Footer />
  </div>
)