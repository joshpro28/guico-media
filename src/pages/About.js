import React, { useContext } from 'react';
// import images
import ClimbingImg from '../img/about/jacob-climbing.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className=' no-scrollbar overflow-y-scroll lg:overflow-hidden container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-32'>
          
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='w-full pt-28 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start lg:justify-items-start'
          >
            <h1 className=' h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
            Hi Everyone! 
            <br /> 
            <br /> My name is Jacob Guico and I’m a photographer/videographer located in Richmond, VA. 
            I take a lot of pride in the relationships I build with my clients. 
            Not only do I want to make our time together memorable, but I want to give you the most professional and enjoyable experience. 
            <br /> 
            <br />The thing I love most about videography is that I get to capture moments and memories that last a lifetime by creating something that you will cherish forever. 
            Whether it’s business related or something personal, I guarantee that you will be pleased with my services. 
            Creating content for you that will leave you filled with excitement and joy. 
            <br />
            <br /> I’m looking forward to making amazing experiences with you!
            </p>
            <Link to={'/portfolio'} className='btn'>
              View my work
            </Link>
          </motion.div>
          {/* image */}
          <div className='flex-1 lg:max-h-max order-2 lg:order-1'>
            <img src={ClimbingImg} alt='' />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
