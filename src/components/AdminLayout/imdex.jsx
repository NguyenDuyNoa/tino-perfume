import React from "react";
import LeftSideBar from "../LeftSidebar";

const AdminLayout = ({ children }) => {
  const {fullName} = JSON.parse(localStorage.getItem("userInfor"));

  return (
    <div>
      <div className="w-full h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex justify-between px-20 items-center">
        <p className="text-xl font-semibold">Tino Perfume Admin Page</p>
        <div className=" font-semibold">Xin chào, {fullName}</div>
      </div>
      <div className="flex ">
        <LeftSideBar />
        <div className="px-8 my-6 w-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
