import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Auth/AuthContext';

const Header = () => {
    const { user, handleOut } = useContext(UserContext);
    return (
        // navbar area start
        <Navbar
            fluid={false}
            rounded={true}
            className="sticky top-0 z-20 left-0"
        >

        </Navbar>
    );
};

export default Header;