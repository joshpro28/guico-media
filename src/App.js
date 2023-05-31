import React, { useContext } from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import cursor context
import { CursorContext } from './context/CursorContext';

const App = () => {
  // const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
