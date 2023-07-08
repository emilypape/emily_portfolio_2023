import React from 'react';
import Nav from './Nav';
import Bio from './Bio';
import Featured from './Featured';
import Portfolio from './Portfolio';

export default function Home() {
  return (
    <div>
      <Nav />
      <Bio />
      <Featured />
      <Portfolio />
    </div>
  );
}
