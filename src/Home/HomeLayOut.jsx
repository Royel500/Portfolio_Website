import React from 'react';
import Navbar from '../shears/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shears/Footer';

const HomeLayOut = () => {
    return (
        <div>
<div className='fixed top-0 left-0 right-0 z-999'>
 <Navbar/>
</div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayOut;