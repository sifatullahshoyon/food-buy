import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="navbar bg-transparent p-5">
        <div className="flex-1">
          <Link to="/">
            <h3 className="text-2xl font-lato font-bold text-white">food<span className="text-brown">Buy</span></h3>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="md:flex justify-center items-center space-y-3 md:space-y-0 gap-14 mr-4">
            <li>
              <NavLink to="/" title="Home" aria-label="Home" className={({isActive}) => (isActive ? "active" : "default")}>
                Home
              </NavLink>
            </li>
            <li>
            <NavLink to="/menu" title="Menu" aria-label="Menu" className={({isActive}) => (isActive ? "active" : "default")}>
                Menu
            </NavLink>
            </li>
            <li>
            <NavLink to="/about us" title="Menu" aria-label="Menu" className={({ isActive }) => (isActive ? "active" : "default")}>
                About Us
            </NavLink>
            </li>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search Your Food"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
