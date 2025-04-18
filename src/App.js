import React from 'react'
import {Article, Brand, CTA, Navbar} from './components';
import {Footer, Blog, Features, Possibility, WhatGPT3, Header} from './containers';
import './App.css';
import './index.css';
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;
