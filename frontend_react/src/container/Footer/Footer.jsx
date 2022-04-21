import React, { useState } from 'react';
import { HiDocumentDownload } from 'react-icons/hi';
import resume from '../../assets/CV.pdf';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">contact me</h2>
      <div className='app__footer-all'>
        <div className='app__footer-profile'>
          <img src={images.photocolor} alt="photocolor" className='app__footer-img' />
        </div>
        <div>
          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={images.email} alt="email" />
              <a href="mailto:isma.kabbaj@hotmail.com" className="p-text">isma.kabbaj@hotmail.com</a>
            </div>
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" />
              <a href="tel:+337510298640" className="p-text">+33 7 51 02 98 64</a>
            </div>
          </div>
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
                <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="app__buttons">
                <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                <a href={resume} target="_blank" download="CV_IsmailKabbaj.pdf">
                  <button type="button" className="p-text"><HiDocumentDownload fontSize={'1.2rem'} />Download Resume</button>
                </a>
              </div>
              <div className='app__social-footer'>
                <div>
                  <a href="https://github.com/sma3inn" target="_blank"><BsGithub /></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/ismail-kabbaj-530a0a177/" target="_blank"><BsLinkedin /></a>
                </div>
              </div>

            </div>
          ) : (
            <div>
              <h3 className="head-text">
                Thank you for sending a message, I will respond ASAP!
              </h3>
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);