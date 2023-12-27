import Button from "../../componets/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { useFetchRooms } from "../../hooks/useFetchRooms";
import { ToggleIsOpenEditRoomPage } from "../../store/RoomSlice";
import DataLoadingPage from "../DataLoadingPage";

const EditRoom = () => {
  //現在正在觀看Detail的Room id
  const editRoomId = useAppSelector((state) => state.room.openRoomIdDetailId);
  //抓取所有房間的資料
  const { data: rooms, isLoading } = useFetchRooms();
  // 篩出要編輯的房間資料
  const editRoomData = rooms?.filter((room) => room.id === editRoomId)?.[0];
  console.log(editRoomData);
  const dispatch = useAppDispatch();

  //取消編輯視窗
  function handleClickCancel() {
    dispatch(ToggleIsOpenEditRoomPage(false));
  }

  if (!editRoomData || isLoading) return <DataLoadingPage />;

  return (
    <div className="w-max h-max bg-gray-200 p-10 rounded-xl relative flex flex-col justify-center gap-8">
      {editRoomData.id}
      <button
        className=" absolute top-2 right-2 border border-gray-400 w-8 h-8 flex justify-center items-center rounded-full p-4 hover:bg-gray-300 "
        onClick={() => handleClickCancel()}
      >
        X
      </button>
      <div className="grid grid-cols-4 gap-2">
        <div>房型內容編輯</div>
        <label className="text-black font-bold ">房間名稱</label>
      </div>
      <div>
        <Button buttonText="取消" Fn={() => handleClickCancel()}></Button>
        <Button buttonText="更新"></Button>
      </div>
    </div>
  );
};

export default EditRoom;
