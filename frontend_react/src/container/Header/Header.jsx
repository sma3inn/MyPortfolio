import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import { images } from '../../constants'
import './Header.scss';


const scaleVariants = {
  whileInView: {
    scale:[0, 1],
    opacity: [0, 1],
    transition: {
      duration:1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'> {/*deleted id home because of the appWrap*/}
      <motion.div 
        whileInView={{ x: [-100,0], opacity: [0,1] }} 
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>🙋🏻‍♂️</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Ismail</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>AI engineering</p>
            <p className='p-text'>Computer science</p>
          </div>
        </div>
      </motion.div>

      <motion.div
       whileInView={{ opacity: [0,1] }} 
       transition={{ duration: 0.5, delayChildren:0.5 }}
       className="app__header-img"
      >
        {/*<img src={images.profile} alt="profile_bg" />*/}
        <motion.img
          whileInView={{ scale: [0,1] }} 
          transition={{ duration: 1, ease:'easeInOut' }}
          src={images.signature}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.python, images.javascript, images.api].map((circle, index) => (
          <div className='circle-cmp app__flex'  key={`circle-${index}`}>
            <img src={circle} alt="cicle" /> 
          </div>
        ))}

      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')