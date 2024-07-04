import Logo from 'components/logo';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='sticky top-0 z-50 border-b bg-white p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div
          className='cursor-pointer text-xl font-bold text-white'
          onClick={scrollToTop}
        >
          <Logo />
        </div>

        {/* Navigation Links */}
        <ul className='hidden space-x-6 lg:flex'>
          <li>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              className='cursor-pointer transition-all duration-200 ease-in-out hover:tracking-widest hover:text-gray-800'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='why-garbhagudi'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer transition-all duration-200 ease-in-out hover:tracking-widest hover:text-gray-800'
            >
              Why GarbhaGudi
            </Link>
          </li>
          <li>
            <Link
              to='our-success'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer transition-all duration-200 ease-in-out hover:tracking-widest hover:text-gray-800'
            >
              Our Success
            </Link>
          </li>
          <li>
            <Link
              to='testimonials'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer transition-all duration-200 ease-in-out hover:tracking-widest hover:text-gray-800'
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to='awards'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer transition-all duration-200 ease-in-out hover:tracking-wider hover:text-gray-800'
            >
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
