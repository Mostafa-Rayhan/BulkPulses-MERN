import React from 'react';
import Banner from './Banner/Banner';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet><br />
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;
