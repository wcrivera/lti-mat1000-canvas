import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface SeccionState {
    sid: string
    cid: string
    mid: string
    bid: string
    seccion: number
    nombre: string
}

export interface SeccionesState {
    secciones: Array<SeccionState>
    seccion: SeccionState
    isLoading: boolean
}

const initialState: SeccionesState = {
    secciones: [],
    seccion: {
        sid: '',
        cid: '',
        mid: '',
        bid: '',
        seccion: 1,
        nombre: '',
    },
    isLoading: false

}

export const seccionSlice = createSlice({
    name: 'secciones',
    initialState,
    reducers: {
        setSecciones: (state, action) => {
            state.secciones = action.payload
        },
        setSeccion: (state, action) => {
            state.seccion = action.payload
        },  
        startLoadingSeccion: (state) => {
            state.isLoading = true;
        },
        endLoadingSeccion: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setSecciones, 
    setSeccion,
    startLoadingSeccion, 
    endLoadingSeccion 
} = seccionSlice.actions

