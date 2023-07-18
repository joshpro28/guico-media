import React, { useContext } from 'react';
// import images
import Skateboard from '../img/portfolio/Skateboard.jpeg';
import Couple from '../img/portfolio/Couple.jpeg';
import Christian from '../img/portfolio/Christian.jpeg';
import Barnettes from '../img/portfolio/Barnettes.jpeg';
import Boat from '../img/portfolio/Boat.jpeg';
import Snow from '../img/portfolio/Snow.jpeg';
import Water from '../img/portfolio/Water.jpeg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
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
        className=' no-scrollbar overflow-y-scroll overflow-x-hidden md:overflow-hidden container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left '>
          
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='w-full pt-28 pb-14 lg:pt-24 lg:w-auto z-10 flex flex-col justify-center items-center'
          >
            <h1 className=' h1 pb-6'>Portfolio</h1>
            {/* image grid */}
          
          <div class="  flex-col flex flex-1 ">
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='  grid grid-cols-2 md:grid-cols-4 gap-4 flex-1'
          >
            {/* image */}
            <div className='row-span-2 '>
              <img
                className='object-cover  hover:scale-110 transition-all duration-500'
                src={Skateboard}
                alt=''
              />
            </div>
            <div className='row-span-2   '>
              <img
                className=' object-cover hover:scale-110 transition-all duration-500'
                src={Christian}
                alt=''
              />
            </div>
            <div className='row-span-1  '>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Couple}
                alt=''
              />
            </div>
            <div className='row-span-1  '>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Barnettes}
                alt=''
              />
            </div>
            <iframe className='object-cover h-[440px]  row-span-2 col-span-2 lg:row-span-2 lg:col-span-2 ' width="100%" height="100%" src="https://www.youtube.com/embed/3Hcp2zQmg0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <div className='row-span-1  '>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Boat}
                alt=''
              />
            </div>
            <div className='row-span-1 '>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Water}
                alt=''
              />
            </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>




      
    </motion.section>
  );
};

export default Portfolio;
