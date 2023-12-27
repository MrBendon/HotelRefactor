import { createSlice } from "@reduxjs/toolkit";

export interface RoomState {
  openRoomIdDetailId: number;
  isOpenEditRoomPage: boolean;
}

const initialState: RoomState = {
  openRoomIdDetailId: 0,
  isOpenEditRoomPage: false,
};

export const RoomSlice = createSlice({
  name: "RoomSlice",
  initialState,
  reducers: {
    MutateOpenId: (state, action) => {
      state.openRoomIdDetailId = action.payload;
    },
    ToggleIsOpenEditRoomPage: (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.isOpenEditRoomPage = action.payload;
      } else {
        state.isOpenEditRoomPage = !state.isOpenEditRoomPage;
      }
    },
  },
});

export const { MutateOpenId, ToggleIsOpenEditRoomPage } = RoomSlice.actions;

export default RoomSlice.reducer;
