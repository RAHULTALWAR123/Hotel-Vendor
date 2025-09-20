import { NavLink } from "react-router-dom";
import { MdDashboard, MdMeetingRoom, MdEventAvailable, MdPayments, MdSettings } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { RiBook2Fill } from "react-icons/ri";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard size={25} />, path: "/" },
    { name: "Rooms", icon: <MdMeetingRoom size={25} />, path: "/rooms" },
    { name: "Availability & Pricing", icon: <FaTags size={25} />, path: "/availability" },
    { name: "Booking", icon: <RiBook2Fill size={25} />, path: "/booking" },
    { name: "Payouts", icon: <MdPayments size={25} />, path: "/payouts" },
    { name: "Settings", icon: <MdSettings size={25} />, path: "/settings" },
  ];

  return (
    <div className="w-56 h-[calc(100vh-96px)] bg-red-50 p-6 shadow-md">
      <nav className="flex flex-col gap-4 mt-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                isActive
                  ? " text-red-500 font-bold"
                  : "text-black hover:bg-red-100"
              }`
            }
          >
            {item.icon}
            <span className="font-semibold">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
