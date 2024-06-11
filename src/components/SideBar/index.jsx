import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({toggleMenu}) => {
  return (
    <nav className="bg-[#f3f3f3] w-64 h-screen pt-10 overflow-y-auto sticky top-0">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white block w-full"
                : "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider block w-full"
            }
            title="Home"
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white block w-full"
                : "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider block w-full"
            }
            title="Male"
          >
            Nước hoa Nam
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white block w-full"
                : "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider block w-full"
            }
            title="Female"
          >
            Nước hoa Nữ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/unisex"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white block w-full"
                : "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider block w-full"
            }
            title="Unisex"
          >
            Nước hoa Unisex
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white block w-full"
                : "p-3 text-sm cursor-pointer uppercase font-semibold tracking-wider block w-full"
            }
            title="About"
          >
            Liên hệ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
