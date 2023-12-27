import { Outlet } from "react-router-dom";

const Rooms = () => {
  return (
    <div className=" rounded-sm">
      <Outlet></Outlet>
    </div>
  );
};

export default Rooms;
