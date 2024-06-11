import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../SideBar";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`bg-[#f3f3f3] mb-5 `}>
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20"
            onClick={toggleMenu}
          ></div>
        )}
        <div className=" xl:w-[1200px] lg:w-[970px] md:w-[750px] sm:w-[600px] px-4 mx-auto">
          <div className="table w-full">
            <div className=" relative table-cell align-middle">
              <button
                className="md:hidden absolute top-2 right-5 z-10 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"
                    />
                  ) 
                  : (
                    <path
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"
                    />
                  )
                  }
                </svg>
              </button>
              <div className="flex items-center justify-center align-middle xl:h-16 h-10">
                <div
                  className={`${menuOpen ? "block" : "hidden"} md:block absolute z-20 -left-10 -top-[130px] md:relative md:left-0 md:top-0 lg:table-cell lg:align-middle pl-5 lg:pl-0 h-10 xl:h-16`}
                >
                  {isMobile ? (
                    <Sidebar toggleMenu={toggleMenu}  />
                  ) : (
                    <div>
                      <ul className="flex" id="menu-main-menu">
                        <li className="flex items-center ">
                          <NavLink
                            to="/"
                            className={({ isActive }) =>
                              isActive
                                ? "p-[10px] xl:p-[18px] text-xs te md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider"
                            }
                            title="Home"
                          >
                            Trang chủ
                          </NavLink>
                        </li>
                        <li className="flex items-center justify-center">
                          <NavLink
                            to="/men"
                            className={({ isActive }) =>
                              isActive
                                ? "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider"
                            }
                            title="Male"
                          >
                            Nước hoa Nam
                          </NavLink>
                        </li>
                        <li className="flex items-center justify-center">
                          <NavLink
                            to="/women"
                            className={({ isActive }) =>
                              isActive
                                ? "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider"
                            }
                            title="Female"
                          >
                            Nước hoa Nữ
                          </NavLink>
                        </li>
                        <li className="flex items-center justify-center">
                          <NavLink
                            to="/unisex"
                            className={({ isActive }) =>
                              isActive
                                ? "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider"
                            }
                            title="Unisex"
                          >
                            Nước hoa Unisex
                          </NavLink>
                        </li>
                        <li className="menu-item flex items-center justify-center">
                          <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                              isActive
                                ? "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : "p-[10px] xl:p-[18px] text-xs md:text-sm xl:text-lg cursor-pointer uppercase font-semibold tracking-wider"
                            }
                            title="About"
                          >
                            Liên hệ
                          </NavLink>

                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

                        
                    