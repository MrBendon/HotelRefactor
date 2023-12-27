import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  size?: "normal" | "large" | "small";
  styledtype?: "normal" | "disabled" | "confirm" | "danger" | "gray";
  Fn?: () => void;
}

const buttonStyledList = {
  normal: "bg-gray-400 text-white  hover:bg-gray-600 ",
  disabled: "bg-gray-400",
  confirm: "bg-blue-600  text-white hover:bg-blue-500",
  danger: "bg-red-300 text-white hover:bg-red-600",
  gray: "bg-gray-200 text-gray-500 border border-gray-400 hover:bg-gray-100",
};

const buttonSizeList = {
  large: "p-2",
  normal: "px-4 py-1",
  small: "px-1",
};

const Button = ({ buttonText, styledtype = "normal", size = "normal", Fn }: ButtonProps) => {
  function handleClick() {
    if (Fn) Fn();
  }
  return (
    <button
      className={`text-sm rounded-lg transition-all ${styledtype && buttonStyledList[styledtype]} ${
        size && buttonSizeList[size]
      }`}
      onClick={() => handleClick()}
    >
      {buttonText}
    </button>
  );
};

export default Button;
