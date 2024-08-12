// import React from 'react'
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { GiShop } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdDynamicFeed } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { MdReport } from "react-icons/md";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebarContainer w-[50px] bg-[#eeeefc] sm:bg-[#fbfbff] sticky top-[50px] py-3 mt-5 sm:px-5 sm:flex-1">
      <ul className="sm:*:p-1 sm:*:rounded-lg w-full flex flex-col items-center sm:block gap-5 text-xl sm:text-sm">
        <span className="text-[#bbbaba] font-bold text-xs hidden sm:inline-block">Dashboard</span>
        <li className="hover:text-[#4e4eff] ">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:border-b sm:hover:border-none border-[#4e4eff] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/"}
          >
            <IoMdHome />
            <span className="hidden sm:inline-block">Home</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/users"}
          >
            <FaRegUser />
            <span className="hidden sm:inline-block">User</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/products"}
          >
            <GiShop />
            <span className="hidden sm:inline-block">Products</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/analytics"}
          >
            <IoAnalytics />
            <span className="hidden sm:inline-block">Analytics</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/sales"}
          >
            <FaArrowTrendUp />
            <span className="hidden sm:inline-block">Sales</span>
          </NavLink>
        </li>
        <span className="text-[#bbbaba] font-bold text-xs hidden sm:inline-block">Quick Menu</span>

        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/newusers"}
          >
            <FiUserPlus />
            <span className="hidden sm:inline-block">New User</span>
          </NavLink>
        </li>

        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/transaction"}
          >
            <FaDollarSign />
            <span className="hidden sm:inline-block">Transaction</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/reports"}
          >
            <MdBarChart />
            <span className="hidden sm:inline-block">Reports</span>
          </NavLink>
        </li>
        <span className="text-[#bbbaba] font-bold text-xs hidden sm:inline-block">Notifications</span>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/mail"}
          >
            <CiMail />
            <span className="hidden sm:inline-block">Mail</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/feedback"}
          >
            <MdDynamicFeed />
            <span className="hidden sm:inline-block">Feedback</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/messages"}
          >
            <FaRegMessage />
            <span className="hidden sm:inline-block">Messages</span>
          </NavLink>
        </li>
        <span className="text-[#bbbaba] font-bold text-xs hidden sm:inline-block">Staff</span>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/manage"}
          >
            <PiSuitcaseSimpleFill />
            <span className="hidden sm:inline-block">Manage</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/analytics2"}
          >
            <IoAnalytics />
            <span className="hidden sm:inline-block">Analytics</span>
          </NavLink>
        </li>
        <li className="hover:text-[#4e4eff] hover:border-b sm:hover:border-none border-[#4e4eff]">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:text-[#4e4eff] sm:hover:text-[#555] sm:hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/reports2"}
          >
            <MdReport />
            <span className="hidden sm:inline-block">Reports</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
