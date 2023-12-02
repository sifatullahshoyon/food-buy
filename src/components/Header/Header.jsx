import React from 'react';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='header'>
            {/* Start Navbar */}
                <Navbar />
            {/* End Navbar */}

            {/* Start Header Content Section */}
            <div className='flex justify-center items-center text-center h-[80vh]'>
                <div className='p-5 w-full'>
                    <p className='text-brown text-xl md:text-3xl lg:text-6xl font-kristi font-medium mb-7'>Welcome to</p>
                    <h1 className='text-white text-2xl md:text-5xl lg:text-9xl font-lato font-bold mb-5 tracking-wide'>Food Buy</h1>
                    <h1 className='text-white text-2xl md:text-5xl lg:text-9xl font-lato font-bold tracking-wide mb-5'>RESTAURANT</h1>
                    <p className='text-white md:text-lg lg:text-3xl font-lato font-medium tracking-wider'>MAKING THE DELICIOUS PREMIUM FOOD SINCE</p>
                </div>
            </div>
            {/* End Header Content Section */}
        </header>
    );
};

export default Header;