import IconButton from "./IconButton";
import { FaPenNib } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useAppDispatch } from "../hooks/reduxHook";
import { ToggleIsOpenEditRoomPage } from "../store/RoomSlice";
const RoomDetailFooter = () => {
  const dispatch = useAppDispatch();
  function handleOnClick() {
    dispatch(ToggleIsOpenEditRoomPage(true));
  }

  return (
    <div className="gray-full flex justify-end gap-4 items-center">
      <IconButton buttonText="編輯" Icon={<FaPenNib />} Fn={handleOnClick}></IconButton>
      <IconButton buttonText="刪除" Icon={<FaRegTrashAlt />} colorStyle="danger"></IconButton>
    </div>
  );
};

export default RoomDetailFooter;
