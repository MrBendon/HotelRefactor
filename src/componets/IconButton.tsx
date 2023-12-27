import { HTMLAttributes } from "react";

interface PropsType extends HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  Fn?: () => void;
  Icon?: JSX.Element;
  colorStyle?: "normal" | "danger" | "confirm" | "gray";
  size?: "normal" | "large" | "small";
}

const colorStyleList = {
  normal: "bg-gray-400 text-white  hover:bg-gray-600 ",
  confirm: "bg-blue-600  text-white hover:bg-blue-500",
  danger: "bg-red-300 text-white hover:bg-red-600",
  gray: "bg-gray-200 text-gray-500 border border-gray-400 hover:bg-gray-100",
};

const buttonSizeList = {
  large: "p-2",
  normal: "px-4 py-1",
  small: "px-1",
};

const IconButton = ({
  buttonText = "按鈕名稱",
  Fn,
  Icon,
  colorStyle = "normal",
  size = "normal",
}: PropsType) => {
  function handleOnClick() {
    if (Fn) Fn();
  }

  return (
    <button
      className={`text-sm rounded-lg transition-all flex gap-2 items-center justify-around ${
        colorStyle && colorStyleList[colorStyle]
      } ${size && buttonSizeList[size]}`}
      onClick={() => handleOnClick()}
    >
      {Icon}
      {buttonText}
    </button>
  );
};

export default IconButton;
