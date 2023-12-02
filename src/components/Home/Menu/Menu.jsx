import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Menu = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='my-28'>
            <div className='container mx-auto p-5'>
                <div>
                    <h1 className='text-center font-lato text-5xl text-brown font-bold my-7'>Our Menu</h1>
                </div>
                <div>
                    {
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;