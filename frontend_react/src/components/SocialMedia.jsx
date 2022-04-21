import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/sma3inn" target="_blank"><BsGithub /></a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/ismail-kabbaj-530a0a177/" target="_blank"><BsLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia