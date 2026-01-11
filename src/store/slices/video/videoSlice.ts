import { createSlice } from "@reduxjs/toolkit";

export interface VideoState {
  vid: string;
  cid: string;
  mid: string;
  bid: string;
  sid: string;
  url: string;
  video: string;
}

export interface VideosState {
  video: VideoState;
  videos: Array<VideoState>;
  isLoading: boolean;
}

const initialState: VideosState = {
  video: { vid: "", cid: "", mid: "", bid: "", sid: "", url: "", video: "" },
  videos: [{ vid: "", cid: "", mid: "", bid: "", sid: "", url: "", video: "" }],
  isLoading: true,
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideo: (state, action) => {
      state.video = action.payload;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    startLoadingVideo: (state) => {
      state.isLoading = true;
    },
    endLoadingVideo: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setVideo, setVideos, startLoadingVideo, endLoadingVideo } =
  videoSlice.actions;
