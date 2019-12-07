import React from 'react'
import Link from 'next/link'

const linkstyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkstyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkstyle}>About</a>
    </Link>
  </div>
);

export default Header;