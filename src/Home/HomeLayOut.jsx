import React from 'react';
import Navbar from '../shears/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shears/Footer';

const HomeLayOut = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayOut;