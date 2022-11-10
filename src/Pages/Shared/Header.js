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
            className="sticky top-0 z-20 left-0 bg-pink-100"
        >
            <Navbar.Brand href="/" className='flex items-center'>
                <img
                    src="https://i.ibb.co/XyC99s8/attachment-82859174-removebg-preview.png"
                    className="w-20 overflow-hidden"
                    alt="it Logo"
                />
                <span className="text-yellow-700 self-center whitespace-nowrap text-xl font-bold dark:text-white ">
                    IT Technician
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {user ?
                    <> <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user ? user.email : 'loading'}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item onClick={handleOut}>
                            Log out
                        </Dropdown.Item>
                    </Dropdown>
                        <Navbar.Toggle /></> : ''
                }
            </div>
            {/* navbar menu start  */}
            <Navbar.Collapse>
                <ul className="flex flex-col p-4 mt-4 bg-pink-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link to={'/'} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-green-900 md:p-0 dark:text-white" aria-current="page">Home</Link>
                    </li>

                    <li>
                        <Link to={'/services'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                    </li>
                    <li>
                        <Link to={'/blog'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                    </li>
                    {
                        user ?
                            <> <li>
                                <Link to={'/add-service'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Service</Link>
                            </li>
                                <li>
                                    <Link to={'/my-reviews'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Reviews</Link>
                                </li>
                                <li>
                                    <button onClick={handleOut} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log Out</button>
                                </li></> : <><li>
                                    <Link to={'/login'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                                </li>
                                <li>
                                    <Link to={'/sign'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign-up</Link>
                                </li></>
                    }

                </ul>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;