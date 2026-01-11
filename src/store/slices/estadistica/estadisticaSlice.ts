import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface EstadisticaState {
    numero: number
    correctas: number
    incorrectas: number
}

export interface EstadisticasState {
    estadisticas: Array<EstadisticaState>
    estadistica: EstadisticaState
    isLoading: boolean
}

const initialState: EstadisticasState = {
    estadisticas: [{
        numero: 0,
        correctas: 0,
        incorrectas: 0
    }], 
    estadistica: {
        numero: 0,
        correctas: 0,
        incorrectas: 0
    },
    isLoading: true
}

export const estadisticaSlice = createSlice({
    name: 'estadisticas',
    initialState,
    reducers: {
        setEstadisticas: (state, action) => {
            state.estadisticas = action.payload
        },
        setEstadistica: (state, action) => {
            state.estadistica = action.payload
        },
        startLoadingEstadistica: (state) => {
            state.isLoading = true;
        },
        endLoadingEstadistica: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setEstadisticas,
    setEstadistica, 
    startLoadingEstadistica, 
    endLoadingEstadistica 
} = estadisticaSlice.actions

