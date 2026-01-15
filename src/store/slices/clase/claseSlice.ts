import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface ClaseState {
    id: string
    curso_id: string
    capitulo_id: string
    nombre: string
    numero: number
    activo: boolean
}

export interface ClasesState {
    clases: Array<ClaseState>
    clase: ClaseState
    isLoading: boolean
}

const initialState: ClasesState = {
    clases: [{ id: "", curso_id: '', capitulo_id: '', nombre: '', numero: 0, activo: false }],
    clase: { id: "", curso_id: '', capitulo_id: '', nombre: '', numero: 0, activo: false },
    isLoading: true
}

export const claseSlice = createSlice({
    name: 'clases',
    initialState,
    reducers: {
        setClase: (state, action) => {
            state.clase = action.payload
        },
        setClases: (state, action) => {
            state.clases = action.payload
        },
        startLoadingClase: (state) => {
            state.isLoading = true;
        },
        endLoadingClase: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setClase,
    setClases,
    startLoadingClase, 
    endLoadingClase 
} = claseSlice.actions

