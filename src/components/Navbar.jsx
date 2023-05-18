import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { logo , close,menu } from '../assets';
import { navLinks } from '../constants';
import Layout from '../Layout';
import { root } from "../main";


const Navbar = () => {

  const [toggele, setToggele] = useState(false);

  return (
    <nav className="w-full flex py-y justify-between items-center navbar   pt-5">
      <img src={logo} onClick={ ()=>{
      root.render(<Layout />);
  }} 
      className="w-[124px]  h-[32px] cursor-pointer" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
         {navLinks.map((nav,index) => (
            <li
             key={nav.id}
             className={`cursor-pointer font-poppins font-normal  text-[16px]  ${index === navLinks.length-1 ? "mr-0":"mr-10"} text-white`}
            >
            <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
         ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img src= {toggele ? close : menu }
        className="w-[28px] h-[28px] object-contain"
        onClick={() => {
          setToggele(!toggele)
          
        } }
        />

        <div className={`${ toggele ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar ` }>
        <ul className="list-none flex justify-end items-center flex-1 flex-col	">
         {navLinks.map((nav,index) => (
            <li
             key={nav.id}
             className={`cursor-pointer font-poppins font-normal  text-[16px]  ${index === navLinks.length-1 ? "mr-0":"mb-4"} text-white`}
            >
            <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
         ))}
      </ul>

        </div>
            
      </div>

    </nav>
  )
}

export default Navbar