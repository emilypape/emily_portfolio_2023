import Nav from './Nav';
import Bio from './Bio';
import About from './About';
import Featured from './Featured';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Home() {
  const handleClickScroll = (el) => {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Nav handleClickScroll={handleClickScroll} />
      <div id='Hero'>
        <Bio />
      </div>
      <div id='About'>
        <About />
      </div>
      <div id='WhatIDo'>
        <Featured />
      </div>
      <div id='Work'>
        <Portfolio />
      </div>
      <div id='Contact'>
        <Contact />
      </div>
    </div>
  );
}
