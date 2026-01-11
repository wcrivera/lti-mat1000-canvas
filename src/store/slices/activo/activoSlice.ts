import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface ActivoState {
    id: string
    gid: string
    cid: string
    mid: string
    bid: string
    sid: string
    diapositiva: { activo: boolean },
    video: { activo: boolean },
    pregunta: { activo: boolean, multiple: boolean }

}

export interface ActivosState {
    activos: Array<ActivoState>
    activo: ActivoState
    isLoading: boolean
}

const initialState: ActivosState = {
    activos: [{ id: '', gid: '', cid: '', mid: '', bid: '', sid: '', diapositiva: { activo: false }, video: { activo: false }, pregunta: { activo: false, multiple: false } }],
    activo: { id: '', gid: '', cid: '', mid: '', bid: '', sid: '', diapositiva: { activo: false }, video: { activo: false }, pregunta: { activo: false, multiple: false } },
    isLoading: false
}

export const activoSlice = createSlice({
    name: 'activos',
    initialState,
    reducers: {
        setActivo: (state, action) => {
            state.activo = action.payload
        },
        setActivos: (state, action) => {
            state.activos = action.payload
        },
        startLoadingActivo: (state) => {
            state.isLoading = true;
        },
        endLoadingActivo: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setActivo,
    setActivos,
    startLoadingActivo,
    endLoadingActivo
} = activoSlice.actions

