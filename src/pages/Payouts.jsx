// Payouts.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { FiCalendar, FiMoreHorizontal } from "react-icons/fi";
import PaymentPie from "../components/PaymentPie";
import DailyTraffic from "../components/DailyTraffic";

// Sample Data
const lineData = [
  { name: "SEP", spend: 90, earn: 50 },
  { name: "OCT", spend: 70, earn: 40 },
  { name: "NOV", spend: 108, earn: 60 },
  { name: "DEC", spend: 60, earn: 30 },
  { name: "JAN", spend: 105, earn: 50 },
  { name: "FEB", spend: 110, earn: 55 },
];


const payouts = [
  { name: "Monthly Earnings", date: "24 July 25", amount: "₹2,458", status: "Due" },
  { name: "Referral Bonus", date: "24 July 25", amount: "₹1,485", status: "Paid" },
  { name: "Project Incentive", date: "24 July 25", amount: "₹1,024", status: "Paid" },
  { name: "Commission Return", date: "24 July 25", amount: "₹858", status: "Paid" },
  { name: "Monthly Earnings", date: "24 July 25", amount: "₹258", status: "Due" },
];

function Payouts() {
  return (
    <div className="ml-56 mt-24 p-5 absolute top-0 w-[calc(100%-14rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendor Earnings */}
        <div className="bg-white rounded-2xl p-5 shadow flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">Vendor Earnings</h2>
              <p className="text-2xl text-red-600 font-bold mt-2">₹37.5K</p>
              <p className="text-gray-500">
                Total Spent <span className="text-green-500 font-bold ">+2.45%</span>
              </p>
              <p className="flex items-center gap-2 mt-1 text-green-600 font-bold font-mono">
                <span className="w-2 h-2 rounded-full bg-green-600 inline-block font-bold "></span>
                On track
              </p>
            </div>
            <div className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center gap-1">
              <FiCalendar /> 20-07-2024
            </div>
          </div>
          <div className="mt-4 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="spend" stroke="#ff0000" strokeWidth={2} dot />
                <Line type="monotone" dataKey="earn" stroke="#60a5fa" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

<DailyTraffic/>

        {/* Upcoming Payouts */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Upcoming Payouts</h2>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <FiMoreHorizontal size={20} />
            </button>
          </div>
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="text-gray-400/70">
                <th className="text-left py-2">PAYOUTS</th>
                <th className="text-left py-2">DATE</th>
                <th className="text-left py-2">AMOUNT</th>
                <th className="text-left py-2">STATUS</th>
                <th className="text-left py-2"></th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((p, i) => (
                <tr key={i} className="font-bold text-blue-950">
                  <td className="py-2 flex gap-2 items-start">
                    <input
                      type="checkbox"
                      checked={p.status === "Paid"}
                      readOnly
                      className="accent-red-500 mt-1 w-4 h-4"
                    />
                    {p.name}
                  </td>
                  <td>{p.date}</td>
                  <td>{p.amount}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        p.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

<PaymentPie/>
      </div>
    </div>
  );
}

export default Payouts;
