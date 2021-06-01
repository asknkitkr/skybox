import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo_large.svg';

const Navbar = () => {
    return (
        <nav className="flex items-center h-20 text-blue-500 relative shadow-sm" role="navigation">
            
                <Link to="/" className="pl-20">
                    <img src={Logo} alt="Skybox" className="h-5 w-auto sm:h-10" />
                </Link>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 pr-20">
                    <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign In</Link> 
                    <Link to="/register" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign Up</Link>
                </div>
            
        </nav>
    )
}

export default Navbar
