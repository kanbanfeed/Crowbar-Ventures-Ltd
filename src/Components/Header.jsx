import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-8 flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">
        <img src={logo} className='w-20'/>
        </Link>
        </div>
      <nav className="space-x-4 my-auto">
        <a href="/" className="hover:text-indigo-400">Home</a>
        <a href="/about" className="hover:text-indigo-400">About</a>
        <a href="/services" className="hover:text-indigo-400">Services</a>
        <a href="/contact" className="hover:text-indigo-400">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
