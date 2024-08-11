// import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";
import {dates} from '../../data'
import {newMembers} from '../../data'
import {latestTransaction} from '../../data'

export default function Home() {
  return (
    <div className="w-[80%] m-5">
      <div className="flex w-full justify-between">
        <div className="flex-1  p-[25px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.3)]">
          <span className="sm:text-xl">Revanue</span>
          <div className="flex items-center my-[10px]">
            <span className="text-3xl font-semibold">$2,415</span>
            <span className="flex justify-center ml-5 items-center gap-3">
              -11.4
              <FaArrowDown className="negative text-red-600" />
            </span>
          </div>
          <span className="featureSub text-[12px] text-[#bbbaba] font-bold">
            Compared to last month
          </span>
        </div>
        <div className="flex-1 mx-3 p-[25px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.3)]">
          <span className="sm:text-xl">Sales</span>
          <div className="flex items-center my-[10px]">
            <span className="text-3xl font-semibold">$4,415</span>
            <span className="flex justify-center ml-5 items-center gap-3">
              -11.4
              <FaArrowDown className="negative text-red-600" />
            </span>
          </div>
          <span className="featureSub text-[12px] text-[#bbbaba] font-bold">
            Compared to last month
          </span>
        </div>
        <div className="flex-1  p-[25px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.3)]">
          <span className="sm:text-xl">Cost</span>
          <div className="flex items-center my-[10px]">
            <span className="text-3xl font-semibold">$2,225</span>
            <span className="flex justify-center ml-5 items-center gap-3">
              -11.4
              <FaArrowUp className="negative text-green-600" />
            </span>
          </div>
          <span className="featureSub text-[12px] text-[#bbbaba] font-bold">
            Compared to last month
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-7 p-7 justify-between items-start shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.3)]">
        <span className="font-bold">User Analytics</span>
        <div className="w-[95%] mt-5">
          <LineChart
            width={1050}
            height={250}
            data={dates}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <Tooltip />
          </LineChart>
        </div>
      </div>
      <div className="flex gap-5 my-7 w-full">
        <div className="shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.3)] rounded-md p-5">
          <table className="">
            <span className="font-semibold text-lg w-[160px] inline-block my-2">
              New Join Members
            </span>
            <tbody className="flex flex-col justify-between">
              {newMembers.map((newMember) => (
                <tr
                  key={newMember.name}
                  className="flex justify-between items-center h-[65px]"
                >
                  <td className="w-[50px] h-[50px] overflow-hidden rounded-full">
                    <img
                      src={newMember.pic}
                      alt="prof-img"
                    />
                  </td>
                  <td className="flex flex-col items-start w-[150px] ml-6">
                    <span className="font-bold text-sm">{newMember.name}</span>
                    <span className="text-gray-500 text-xs">{newMember.job}</span>
                  </td>
                  <td>
                    <button className="flex items-center gap-2 bg-[#f0f0ff] p-1 rounded-md text-xs text-gray-600">
                      <FaEye />
                      <span>display</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.3)] rounded-md p-5">
            <span className="font-semibold text-lg w-[160px] inline-block my-2">
              Latest transaction
            </span>
          <table className="w-full">
            <thead className="text-left">
                <tr className="h-[65px]">
                    <th className="">Customer</th>
                    <th className="">Date</th>
                    <th>Amount</th>
                    <th className="">Status</th>
                </tr>
            </thead>
            <tbody className="">
              {latestTransaction.map((newMember) => (
                <tr
                  key={newMember.name}
                  className="h-[65px]"
                >
                  <td className="flex items-center gap-2 w-[190px]">
                    <img
                      className="w-[50px] rounded-full h-[50px]"
                      src={newMember.pic}
                      alt="prof-img"
                    />
                    <span className="font-bold text-sm">{newMember.name}</span>
                  </td>
                  <td className="">
                    {newMember.date}
                  </td>
                  <td className="">
                    {newMember.amount}$
                  </td>
                  <td>
                    <button className="flex items-center gap-2 bg-[#edf7ed] p-1 rounded-md text-xs text-[#449e47]">
                      <span>{newMember.status}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
