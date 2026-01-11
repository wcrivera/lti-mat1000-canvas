import { createSlice } from "@reduxjs/toolkit";

export interface DiapositivaState {
  did: string;
  cid: string;
  mid: string;
  bid: string;
  sid: string;
  autor: string;
  diapositivas: Array<{ pagina: number; contenido: string }>;
}

export interface DiapositivasState {
  diapositiva: DiapositivaState;
  diapositivas: Array<DiapositivaState>;
  isLoading: boolean;
}

const initialState: DiapositivasState = {
  diapositiva: {
    did: "",
    cid: "",
    mid: "",
    bid: "",
    sid: "",
    autor: "",
    diapositivas: [{ pagina: 0, contenido: "" }],
  },
  diapositivas: [
    {
      did: "",
      cid: "",
      mid: "",
      bid: "",
      sid: "",
      autor: "",
      diapositivas: [{ pagina: 0, contenido: "" }],
    },
  ],
  isLoading: true,
};

export const diapositivaSlice = createSlice({
  name: "diapositivas",
  initialState,
  reducers: {
    setDiapositiva: (state, action) => {
      state.diapositiva = action.payload;
    },
    setDiapositivas: (state, action) => {
      state.diapositivas = action.payload;
    },
    startLoadingDiapositiva: (state) => {
      state.isLoading = true;
    },
    endLoadingDiapositiva: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDiapositiva,
  setDiapositivas,
  startLoadingDiapositiva,
  endLoadingDiapositiva,
} = diapositivaSlice.actions;
