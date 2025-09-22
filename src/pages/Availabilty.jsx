import { FaCalendar, FaFilter } from "react-icons/fa6";

function Availabilty() {
  const roomTypes = [
    { id: 1, title: "Classic Rooms", deals: 2, available: "2/35", price: "₹1,068" },
    { id: 2, title: "AC Base Rooms", deals: 2, available: "2/35", price: "₹568" },
    { id: 3, title: "Non-AC Rooms", deals: 2, available: "2/35", price: "₹1,568" },
    { id: 4, title: "Sharing Rooms", deals: 2, available: "2/35", price: "₹2,568" },
  ];

  const roomTable = [
    {
      id: 1,
      type: "Single",
      offer: "Family Package",
      policy: "Strict",
      dealPrice: "₹700",
      rate: "₹800",
      availability: "5 rooms",
      status: "low",
    },
    {
      id: 2,
      type: "Double",
      offer: "Holiday Special",
      policy: "Strict",
      dealPrice: "₹1,000",
      rate: "₹1,200",
      availability: "Full",
      status: "full",
    },
    {
      id: 3,
      type: "Classic",
      offer: "Family Bundle",
      policy: "Flexible",
      dealPrice: "₹1,600",
      rate: "₹2,000",
      availability: "12 rooms",
      status: "ok",
    },
    {
      id: 4,
      type: "Basic",
      offer: "Mega Sale",
      policy: "Non refundable",
      dealPrice: "₹3,500",
      rate: "₹4,000",
      availability: "10 rooms",
      status: "ok",
    },
  ];

  return (
    <div className="ml-56 mt-24 p-5 absolute top-0 w-[85%]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-red-500 font-semibold mb-4">Rooms</h2>
        <button className="bg-red-500 text-white px-4 py-1 rounded-xl flex gap-2 items-center">
          <FaCalendar />
          20-07-2024
        </button>
      </div>

      {/* Room Types Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6 p-2 ">
        {roomTypes.map((room) => (
          <div
            key={room.id}
            className="rounded-lg p-4 shadow-2xl bg-white"
          >
            {room.deals > 0 && (
              <div className="text-green-600 font-bold bg-emerald-300/20 w-1/3 px-3 rounded-2xl">
                {room.deals} Deals
              </div>
            )}
            <div className="font-semibold">{room.title}</div>
            <p className="text-sm text-gray-500">{room.available} available</p>
            <p className="text-red-600 font-bold text-xl">
              {room.price}
              <span className="text-gray-500 text-sm">/day</span>
            </p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h3 className="font-semibold text-xl text-red-500">Room Rates</h3>
          <div className="flex gap-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Add rate</button>
            <button className="border px-4 py-2 rounded-lg flex gap-3 items-center"> <FaFilter/>Filter</button>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-400 text-left">
            <tr>
              <th className="py-3 px-4">Room type</th>
              <th className="py-3 px-4">Special Offers</th>
              <th className="py-3 px-4">Cancellation policy</th>
              <th className="py-3 px-4">Deal price</th>
              <th className="py-3 px-4">Rate</th>
              <th className="py-3 px-4">Availability</th>
            </tr>
          </thead>
          <tbody>
            {roomTable.map((room) => (
              <tr key={room.id} className="border-t border-gray-200">
                <td className="py-3 px-4">{room.type}</td>
                <td className="py-3 px-4">{room.offer}</td>
                <td className="py-3 px-4">{room.policy}</td>
                <td className="py-3 px-4 text-gray-600">{room.dealPrice}</td>
                <td className="py-3 px-4 font-semibold">{room.rate}</td>
                <td className="py-3 px-4">
                  {room.status === "low" && (
                    <span className="text-red-500 bg-red-100 px-3 py-1 rounded-lg">
                      {room.availability}
                    </span>
                  )}
                  {room.status === "full" && (
                    <span className="text-red-500 bg-red-100 px-3 py-1 rounded-lg">
                      Full
                    </span>
                  )}
                  {room.status === "ok" && (
                    <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-lg">
                      {room.availability}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Availabilty;

