import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
import NavDrawer from "./Drawer";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className='w-full flex justify-between text-white font-["Montserrat"] items-center'>
      <div className="w-33 h-7 sm:w-44">
        <img src={logo} alt="logo" className="w-full h-full object-cover" />
      </div>
      <div className="sm:hidden">
        <NavDrawer/>
      </div>
      <div className={`flex-col sm:flex-row flex gap-10 items-center text-lg font-medium ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Home  
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/services"}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Services
        </NavLink>
        <NavLink
          to={"/courses"}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Courses
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
