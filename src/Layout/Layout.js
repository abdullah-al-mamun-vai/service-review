import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom'
import FootSection from '../Pages/Shared/FootSection';

const Layout = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            <FootSection></FootSection>
        </div>
    );
};

export default Layout;