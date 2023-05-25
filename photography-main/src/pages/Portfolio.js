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
      <div className='container mx-auto h-full relative '>
        <div className=' h-full items-center justify-start gap-x-10 text-center pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className=''
          >
            <h1 className='h1'>Portfolio</h1>
            
          </motion.div>
          {/* image grid */}
          
          <div class=" h-20% flex-1 flex">
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=' grid grid-cols-4 gap-5 flex-1'
          >
            {/* image */}
            <div className='row-span-2 '>
              <img
                className='hover:scale-110 transition-all duration-500'
                src={Skateboard}
                alt=''
              />
            </div>
            <div className='row-span-2 max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]  '>
              <img
                className=' hover:scale-110 transition-all duration-500'
                src={Christian}
                alt=''
              />
            </div>
            <div className='row-span-1 max-w-[250px] lg:max-w-[500px] h-[187px] lg:h-[220px]  '>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Couple}
                alt=''
              />
            </div>
            <div className='row-span-1 max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]  '>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Barnettes}
                alt=''
              />
            </div>
            <iframe className='row-span-2 col-span-2 ' width="100%" height="100%" src="https://www.youtube.com/embed/3Hcp2zQmg0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]  '>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Boat}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]  '>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Snow}
                alt=''
              />
            </div>
            
            {/* <div className='col-span-2'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Water}
                alt=''
              />
            </div> */}
            </div>
            </div>
          </div>
        </div>
      
    </motion.section>
  );
};

export default Portfolio;
