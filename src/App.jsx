import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Availabilty from "./pages/Availabilty";
import Payouts from "./pages/Payouts";
import Settings from "./pages/Settings";


function App() {
  return (


    <BrowserRouter>
      <Header />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/availability" element={<Availabilty />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
