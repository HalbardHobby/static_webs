import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
    <div>
        <h1>About</h1>
        <p>Some stuff about stuff.</p>
        <p>Need something? <Link to="/contact">Contact me.</Link></p>
    </div>
);

export default AboutPage;