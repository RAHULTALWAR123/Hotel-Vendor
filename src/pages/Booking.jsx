// Booking.jsx
import React from "react";
import { FiSearch, FiFilter, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const bookings = [
  { id: "#SN192MB5H9G", name: "Aarav", contact: "6789432156", amount: "₹2000", status: "Paid" },
  { id: "#SN192MB5H9G", name: "Parmesh", contact: "1234567890", amount: "₹2500", status: "Due" },
  { id: "#SN192MB5H9G", name: "Mohan", contact: "9876543210", amount: "₹2000", status: "Paid" },
  { id: "#SN192MB5H9G", name: "Cecil", contact: "5551234567", amount: "₹3000", status: "Paid" },
  { id: "#SN192MB5H9G", name: "Lakshay", contact: "4445556666", amount: "₹2000", status: "Paid" },
  { id: "#SN192MB5H9G", name: "Yashwant", contact: "2223334444", amount: "₹2500", status: "Paid" },
  { id: "#SN192MB5H9G", name: "Kiran", contact: "1112223333", amount: "₹2000", status: "Due" },
  { id: "#SN192MB5H9G", name: "Kiran", contact: "3334445555", amount: "₹2500", status: "Due" },
  { id: "#SN192MB5H9G", name: "Turen", contact: "6667778888", amount: "₹2000", status: "Paid" },
  { id: "#SN192MB5H9G", name: "Tanmay", contact: "9998887777", amount: "₹3000", status: "Paid" },
];

function Booking() {
  return (
    <div className="ml-56 mt-24 p-5 absolute top-0 w-[83%] rounded-2xl shadow-2xl bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-red-600">Booking</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border px-3 py-1 rounded-md text-gray-700">
            <FiFilter size={16} /> Filter
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by room number/ID"
              className="border rounded-md pl-8 pr-3 py-1 text-sm w-60"
            />
            <FiSearch size={16} className="absolute left-2 top-1.5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg bg-gray-100/20">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-400">
            <tr>
              <th className="py-3 px-4">Booking Id</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Contact No.</th>
              <th className="py-3 px-4">Check In Date</th>
              <th className="py-3 px-4">Check Out Date</th>
              <th className="py-3 px-4">Total Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i} className="border-b text-gray-500">
                <td className="py-3 px-4">{b.id}</td>
                <td className="py-3 px-4">{b.name}</td>
                <td className="py-3 px-4">{b.contact}</td>
                <td className="py-3 px-4">24 July 25</td>
                <td className="py-3 px-4">28 July 25</td>
                <td className="py-3 px-4 text-gray-800 font-semibold">{b.amount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      b.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex gap-2">
                  <button className="text-green-600">
                    <FiCheckCircle size={18} />
                  </button>
                  <button className="text-red-600">
                    <FiXCircle size={18} />
                  </button>
                </td>
                <td>
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <button className="px-3 py-1 rounded-md border bg-gray-100 text-gray-400">Previous</button>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <button
              key={n}
              className={`px-3 py-1 rounded-md ${
                n === 1 ? "bg-gray-300 text-white" : ""
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <button className="px-3 py-1 rounded-md border bg-gray-100">Next</button>
      </div>
    </div>
  );
}

export default Booking;
