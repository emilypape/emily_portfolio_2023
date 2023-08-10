import React from 'react';
import Nav from './Nav';
import Bio from './Bio';
import Featured from './Featured';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Home() {
  const handleClickScroll = (el) => {
    const element = document.getElementById(el);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Nav handleClickScroll={handleClickScroll} />
      <div id='Bio'>
        <Bio />
      </div>
      <div id='Featured'>
        <Featured handleClickScroll={handleClickScroll} />
      </div>
      <div id='Portfolio'>
        <Portfolio />
      </div>
      <div id='Contact'>
        <Contact />
      </div>
    </div>
  );
}
