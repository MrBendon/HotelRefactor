import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import DashBoard from "./pages/Homepage/DashBoard";
import BookingDetails from "./pages/Booking/BookingDetails";
import RoomDetail from "./pages/Room/RoomDetail";
import Bookings from "./pages/Booking/Bookings";
import Rooms from "./pages/Room/Rooms";
import HotelSettings from "./pages/Settings/HotelSettings";
import System from "./pages/System/System";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
        children: [{ path: ":bookingid", element: <BookingDetails /> }],
      },
      {
        path: "rooms",
        element: <Rooms />,
        children: [{ path: ":roomid", element: <RoomDetail /> }],
      },
      {
        path: "settings",
        element: <HotelSettings />,
      },
      {
        path: "system",
        element: <System />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
