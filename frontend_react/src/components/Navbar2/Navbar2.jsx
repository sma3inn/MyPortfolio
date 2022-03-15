import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { AiOutlineExperiment } from 'react-icons/ai';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { useState } from 'react';

import './Navbar2.scss'

const Navbar2 = () => {

    const[activeNav,setActiveNav] = useState('#')

    return (
        <nav className='app__navbar2'>
            <div className='app__navbar-float'>
                <a href='#home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiOutlineHome /></a>
                <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser /></a>
                <a href='#work' onClick={() => setActiveNav('#work')} className={activeNav === '#work' ? 'active' : '' }><BiBook /></a>
                <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : '' }><AiOutlineExperiment /></a>
                <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><MdOutlinePermContactCalendar /></a>
            </div>
        </nav>
    )
}

export default Navbar2