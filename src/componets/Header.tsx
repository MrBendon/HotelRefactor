import { Dispatch, SetStateAction } from "react";
import UserPNG from "../assets/mountain.png";
import Button from "./Button";

type PropsType = {
  setIsOpenNav: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpenNav }: PropsType) => {
  function handleClick() {
    setIsOpenNav((prev) => !prev);
  }

  return (
    <div className="w-full h-16 md:h-full flex justify-end gap-4 items-center p-2 px-4">
      {/* 小尺寸Navbar開關器 */}
      <div
        className="md:hidden mr-auto h-10 w-10 relative group hover:cursor-pointer after:absolute after:top-[50%] after:left-0 after:border-b-2 after:w-full after:border-gray-800 "
        onClick={handleClick}
      >
        <div className=" before:border-b-2 before:border-gray-800 before:h-1 before:w-full before:absolute before:top-3 before:left-0 after:border-b-2 after:border-gray-800 after:h-1 after:w-full after:absolute after:top-6 after:left-0 group-hover:before:top-2 group-hover:after:top-7 before:transition-all after:transition-all"></div>
      </div>
      <span>UserName</span>
      <img src={UserPNG} className="max-h-full " alt="userIcon" />
      <Button buttonText="登出 Logout" />
    </div>
  );
};

export default Header;
