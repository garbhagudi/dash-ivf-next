import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';

const Banner = () => {
  return (
    <div className='mx-auto max-w-7xl py-10 lg:py-24' id='home'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='mx-auto flex max-w-lg flex-col justify-center px-3'>
            <h3 className='py-4 font-heading text-3xl font-bold md:text-4xl'>
              Start IVF from home with our IPL treatment!
            </h3>
            <p className='mt-4 text-lg'>
              IPL stands for Injections, Pharmacy & Lab. It is a service by
              GarbhaGudi specially started for patients seeking infertility
              treatment during the ongoing pandemic. The idea is to help you
              start treatments from your home to keep you safe and protected.
            </p>
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/garbhagudi/image/upload/v1665994575/garbhagudi-ivf/New%20Website/IVF-From-Home-min_pz1yhy.webp'
              className='mx-auto mt-10 flex w-96 items-center justify-center sm:w-fit'
              alt='IVF from Home Logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    overflow: 'hidden',
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h3: {
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [6, null, null, '36px', null, '55px', 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'text_secondary',
      mb: ['20px', null, null, null, null, '30px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  image: {
    img: {
      display: ['block', null, null, 'flex'],
      width: '500px',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, '100%'],
    },
  },
};
