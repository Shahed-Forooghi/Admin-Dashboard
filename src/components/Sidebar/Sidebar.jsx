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
    <div className="sidebarContainer  bg-[#fbfbff] sticky top-[50px] mt-5 sm:px-5 flex-1">
      <ul className="sm:*:p-1 sm:*:rounded-lg text-sm  ">
        <span className="text-[#bbbaba] font-bold text-xs">Dashboard</span>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/"}
          >
            <IoMdHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/users"}
          >
            <FaRegUser />
            <span>User</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/products"}
          >
            <GiShop />
            <span>Products</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/analytics"}
          >
            <IoAnalytics />
            <span>Analytics</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/sales"}
          >
            <FaArrowTrendUp />
            <span>Sales</span>
          </NavLink>
        </li>
        <span className="text-[#bbbaba] font-bold text-xs">Quick Menu</span>

        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/newusers"}
          >
            <FiUserPlus />
            <span>New User</span>
          </NavLink>
        </li>

        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/transaction"}
          >
            <FaDollarSign />
            <span>Transaction</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/reports"}
          >
            <MdBarChart />
            <span>Reports</span>
          </NavLink>
        </li>
        <span className="text-[#bbbaba] font-bold text-xs">Notifications</span>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/mail"}
          >
            <CiMail />
            <span>Mail</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/feedback"}
          >
            <MdDynamicFeed />
            <span>Feedback</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/messages"}
          >
            <FaRegMessage />
            <span>Messages</span>
          </NavLink>
        </li>
        <span className="text-[#bbbaba] font-bold text-xs">Staff</span>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/manage"}
          >
            <PiSuitcaseSimpleFill />
            <span>Manage</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/analytics2"}
          >
            <IoAnalytics />
            <span>Analytics</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={
              "flex items-center gap-2 text-[#555] hover:bg-[#f0f0ff] rounded-md"
            }
            to={"/reports2"}
          >
            <MdReport />
            <span>Reports</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
