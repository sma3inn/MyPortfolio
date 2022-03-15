import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, Navbar2 } from './components';
import './App.scss'

const App = () => {
    return ( 
        <div className='app'>
            <Navbar />
            <Navbar2/>
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}



export default App;