import React, { useContext } from 'react';
// import icons
import {
  ImFacebook,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden lg:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.facebook.com/jacobnicolas' target='_blank' rel='noreferrer'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/guico.media/ ' target='_blank' rel='noreferrer'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/@guicojacob' target='_blank' rel='noreferrer'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
