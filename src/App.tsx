import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import DashBoard from "./pages/Homepage/DashBoard";
import BookingDetails from "./pages/Booking/BookingDetails";
import Bookings from "./pages/Booking/Bookings";
import Rooms from "./pages/Room/Rooms";
import HotelSettings from "./pages/Settings/HotelSettings";
import System from "./pages/System/System";
import RoomOverview from "./pages/Room/RoomOverview";
import BookingsOverView from "./pages/Booking/BookingsOverView";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
        children: [
          { path: "", element: <BookingsOverView /> },
          { path: ":bookingid", element: <BookingDetails /> },
        ],
      },
      {
        path: "rooms",
        element: <Rooms />,
        children: [{ path: "", element: <RoomOverview /> }],
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
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>;
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
