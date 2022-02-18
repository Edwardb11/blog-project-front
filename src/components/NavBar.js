import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className=' shadow-xl  text-center fixed top-0 w-full bg-sky-700     font-bold text-lg text-white'>
          <ul>
            <li className='inline-block pt-4 pb-4 hover:bg-sky-900'>
              <Link to='/' className='pl-6 pr-8'>
                Home
              </Link>
            </li>
            <li className='inline-block pt-4 pb-4 hover:bg-sky-900'>
              <Link to='/About' className='pl-6 pr-8'>
                About
              </Link>
            </li>
            <li className='inline-block pt-4 pb-4 hover:bg-sky-900 '>
              <Link to='/ArticleList' className='pl-6 pr-8'>
                Articles
              </Link>
            </li>
          </ul>
        </nav>
      );
    };