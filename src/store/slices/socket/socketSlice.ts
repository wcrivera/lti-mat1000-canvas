import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SocketState {
  isConnected: boolean;
  rooms: string[];
}

const initialState: SocketState = {
  isConnected: false,
  rooms: [],
};

type RoomAction = PayloadAction<{ room: string }>;

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    initSocket: (state) => {
      console.log(state);
      return;
    },
    connectionEstablished: (state) => {
      console.log(state)
      state.isConnected = true;
    },
    connectionLost: (state) => {
      state.isConnected = false;
    },
    joinRoom: (state, action: RoomAction) => {
      let rooms = action.payload.room;
      state.rooms = state.rooms.concat(rooms);
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initSocket, connectionEstablished, connectionLost, joinRoom } =
  socketSlice.actions;
