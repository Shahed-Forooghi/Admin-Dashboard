// import React from 'react'
import { IoIosSettings } from "react-icons/io";
import { IoMdGlobe } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
  return (
    <div className="w-full h-[50px] sticky top-0 z-50 flex justify-between items-center px-2 sm:px-5 bg-white">
      <h1 className="text-[darkblue] cursor-pointer text-sm sm:text-3xl font-bold">
        Admin Dashboard
      </h1>
      <div className="flex items-center justify-between flex-row-reverse *:w-7 *:h-7 sm:*:w-11 sm:*:h-11 gap-2">
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img src="../img/resumepic.jpg" alt="profile-pic" />
        </div>
        <div className="flex items-center justify-center">
          <button>
            <IoIosSettings className="sm:w-8 sm:h-8 text-[#555] text-2xl" />
          </button>
        </div>
        <div className="flex items-center justify-center relative">
          <span className="absolute top-0 right-0 sm:right-2 sm:top-1 bg-red-600 w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-white text-xs">
            2
          </span>
          <button>
            <IoMdGlobe className="sm:w-7 sm:h-7 text-[#555] text-2xl" />
          </button>
        </div>
        <div className="flex items-center justify-center relative">
        <span className="absolute top-0 right-0 sm:right-2 sm:top-1 bg-red-600 w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-white text-xs">
        2
          </span>
          <button>
            <IoMdNotificationsOutline className="sm:w-7 sm:h-7 text-[#555] text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
