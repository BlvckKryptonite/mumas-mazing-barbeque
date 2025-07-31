
import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const ParallaxWrapper = ({ children, speed = 0.5, className = "" }) => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const y = useTransform(scrollY, 
    [elementTop - clientHeight, elementTop + clientHeight], 
    [-clientHeight * speed, clientHeight * speed]
  );

  useEffect(() => {
    const element = document.getElementById('parallax-element');
    if (element) {
      const onResize = () => {
        setElementTop(element.offsetTop);
        setClientHeight(window.innerHeight);
      };
      onResize();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  return (
    <motion.div
      id="parallax-element"
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
