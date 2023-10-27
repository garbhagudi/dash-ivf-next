import Logo from 'components/logo';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='border-b p-4 sticky top-0 bg-white z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div
          className='text-white text-xl font-bold cursor-pointer'
          onClick={scrollToTop}
        >
          <Logo />
        </div>

        {/* Navigation Links */}
        <ul className='lg:flex space-x-6 hidden'>
          <li>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              className='hover:text-gray-800 cursor-pointer hover:tracking-widest transition-all duration-200 ease-in-out'
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
              className='hover:text-gray-800 cursor-pointer hover:tracking-widest transition-all duration-200 ease-in-out'
            >
              Why GarbhaGudi
            </Link>
          </li>
          <li>
            <Link
              to='ivf-packages'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='hover:text-gray-800 cursor-pointer hover:tracking-widest transition-all duration-200 ease-in-out'
            >
              IVF Packages
            </Link>
          </li>
          <li>
            <Link
              to='testimonials'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='hover:text-gray-800 cursor-pointer hover:tracking-widest transition-all duration-200 ease-in-out'
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to='faq'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='hover:text-gray-800 cursor-pointer hover:tracking-wider transition-all duration-200 ease-in-out'
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
