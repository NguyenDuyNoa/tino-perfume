import React from "react";
import { Link, NavLink } from "react-router-dom";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';

const LeftSideBar = () => {
  const activeClassname =
    "border-l-2 border-blue-500 bg-gray-100 h-10 flex justify-start items-center cursor-pointer font-semibold text-blue-500 uppercase";
  const unactiveClassname =
    "h-10 flex justify-start items-center cursor-pointer font-medium text-gray-500 uppercase";

  const pathname = window.location.pathname;

  return (
    <div className="w-60 h-[100vh] border-r border-gray-300">
      <NavLink
        to='/admin/user-management'
        className={({ isActive }) => isActive ? activeClassname : unactiveClassname}
      >
        <div className="flex ml-4">
          <PersonPinIcon/>
          <p className="ml-2 text-base">Người Dùng</p>
        </div>
      </NavLink>
      <NavLink
        to='/admin/product-management'
        className={({ isActive }) => isActive ? activeClassname : unactiveClassname}
      >
        <div className="flex ml-4">
          <InventoryIcon/>
          <p className="ml-2 text-base">Sản Phẩm</p>
        </div>
      </NavLink>
      <Link
        to='/'
        className={unactiveClassname}
      >
        <div className="flex ml-4">
          <HomeIcon stroke='#888888' />
          <p className="ml-2 text-base">Trang chủ</p>
        </div>
      </Link>
    </div>
  );
};

export default LeftSideBar;