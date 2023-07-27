import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="flex justify-center border-b-2 border-slate-400 ">
    <div className="flex max-w-wrap justify-between items-center w-full py-2 pb-2">
      <div className="text-2xl flex gap-2 items-center">
        <img
          alt="logo"
          src="https://github.com/SAZZAD1Q2/Space-Hub/blob/dev/src/Logo/logo.PNG?raw=true"
          className="w-24 h-24"
        />
        Space Traveler&apos;s Hub
      </div>
      <div className="flex gap-2 text-blue-500 items-center">
        <NavLink className={({ isActive }) => (isActive ? 'p-2 px-4 text-white bg-blue-500 rounded-xl' : 'p-2 px-4')} to="/">Rockets</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'p-2 px-4 text-white bg-blue-500 rounded-xl' : 'p-2 px-4')} to="/mission">Missions</NavLink>
        <div className="w-1 border-l-2 border-blue-500 h-6" />
        <NavLink className={({ isActive }) => (isActive ? 'p-2 px-4 text-white bg-blue-500 rounded-xl' : 'p-2 px-4')} to="/profile">My Profile</NavLink>
      </div>
    </div>
  </div>
);

export default Navbar;
