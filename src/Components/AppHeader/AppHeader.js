import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";


const AppHeader = ({ toggleMenu }) => {
  return (
      <div className="topbar">
        <div className="toggle" onClick={toggleMenu}>
          <FaBars className="icon" />
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <FaSearch className="icon" />
          </label>
        </div>
        <div className="user">
          <img src="https://placehold.co/600x600" alt="UserImg" />
        </div>
      </div>
  );
};

export default AppHeader;
