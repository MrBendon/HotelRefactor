import { Tables } from "../../api/supabaseType";
import RoomDetailFooter from "../../componets/RoomDetailFooter";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { MutateOpenId } from "../../store/RoomSlice";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import EditRoom from "./EditRoom";

export interface RoomPropType {
  room: Tables<"rooms">;
}

const RoomDetail = ({ room }: RoomPropType) => {
  const nowOpenRoomId = useAppSelector((state) => state.room.openRoomIdDetailId);
  const dispatch = useAppDispatch();
  const isOpenDetail = nowOpenRoomId === room.id;
  const hasPhoto = room.roomPhotos ? (room.roomPhotos.length > 0 ? true : false) : false;
  const isOpenEditRoomPage = useAppSelector((state) => state.room.isOpenEditRoomPage);

  function handleOnClick() {
    if (nowOpenRoomId === room.id) {
      dispatch(MutateOpenId(0));
    } else {
      dispatch(MutateOpenId(room.id));
    }
  }

  return (
    <div
      className={`w-full bg-gray-100 flex flex-col px-4 py-6 border-b border-gray-300 transition-all duration-500 ${
        isOpenDetail ? "gap-12" : "gap-0"
      }`}
    >
      {/* upper part */}
      <div className="grid grid-cols-[repeat(6,1fr),50px] gap-2 items-center justify-items-center">
        <div className="h-16">
          {hasPhoto ? (
            <img className="h-full rounded-lg" src={room.roomPhotos?.[0]} alt="RoomIMG" />
          ) : (
            <div className="w-full h-full border border-gray-400 flex justify-center items-center rounded-lg">
              No Photo
            </div>
          )}
        </div>
        <span>{room.name}</span>
        <span>{room.maxCapacity}人</span>
        <span>{room.regularPrice}</span>
        <span>{room.discount}</span>
        <span>{room.numRooms}間</span>
        <button
          className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center"
          onClick={() => handleOnClick()}
        >
          {isOpenDetail ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>

      {/* toggle part */}
      <div
        className={`transition-all duration-500 ${
          isOpenDetail ? " max-h-[160rem] visible opacity-100 " : " max-h-[0rem] invisible opacity-0 "
        } grid grid-cols-[repeat(6,1fr),50px] gap-2 gap-y-8 justify-items-start`}
      >
        <label className=" font-bold text-black sm:col-span-1 col-span-2">房間樓層</label>
        <p className=" sm:col-span-2 col-span-4">{room.floor}</p>
        <p className=" sm:hidden "></p>
        <label className="font-bold text-black sm:col-span-1 col-span-2">房間大小</label>
        <p className=" sm:col-span-2 col-span-4">{room.squareMeters}平方公尺</p>
        <p></p>
        <label className="font-bold text-black sm:col-span-1 col-span-2">房間特色</label>
        <p className="sm:col-span-5 col-span-4">特色內容</p>
        <p></p>
        <label className="font-bold text-black sm:col-span-1 col-span-2">房間描述</label>
        <p className=" sm:col-span-5 col-span-4">{room.roomDescription}</p>
        <p></p>
        <label className="font-bold text-black sm:col-span-1 col-span-2">房間照片</label>
        <div className=" sm:col-span-5 col-span-4 flex gap-4 flex-wrap">
          {room.roomPhotos?.map((photo, i) => (
            <img key={i} className="w-32 aspect-video rounded-sm" src={photo} alt="room photo" />
          ))}
        </div>
        <p></p>

        <div className=" col-span-full w-full mt-8">
          <RoomDetailFooter />
        </div>
        <div
          className={`fixed w-full min-h-screen top-0 left-0 bg-white/70 z-50 transition-all flex justify-center items-center ${
            isOpenEditRoomPage ? "h-max opacity-100 visible " : " opacity-0 invisible"
          }`}
        >
          <EditRoom></EditRoom>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
