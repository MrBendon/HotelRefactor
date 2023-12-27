import RoomOperate from "./RoomOperate";
import RoomDetail from "./RoomDetail";
import { useFetchRooms } from "../../hooks/useFetchRooms";
import DataLoadingPage from "../DataLoadingPage";

const RoomOverview = () => {
  const { data: RoomsData, isLoading } = useFetchRooms();
  console.log(RoomsData);

  if (isLoading) return <DataLoadingPage />;

  return (
    <div className="bg-white rounded-md p-4 text-sm text-gray-500">
      <RoomOperate />
      <div className="grid grid-cols-[repeat(6,1fr),50px] border-b border-gray-400 p-4 items-center justify-items-center text-black font-bold">
        <span>房間圖片</span>
        <span>房間名稱</span>
        <span>可入住人數</span>
        <span>房間價格</span>
        <span>折扣價格</span>
        <span>該房型數量</span>
        <span></span>
      </div>
      <div className="">
        {RoomsData && RoomsData.map((room) => <RoomDetail key={room.id} room={room}></RoomDetail>)}
      </div>
    </div>
  );
};

export default RoomOverview;
