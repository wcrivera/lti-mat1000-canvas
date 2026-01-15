import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface TemaState {
    id: string
    curso_id: string
    capitulo_id: string
    clase_id: string
    nombre: string
    numero: number
    activo: boolean
}

export interface TemasState {
    temas: Array<TemaState>
    tema: TemaState
    isLoading: boolean
}

const initialState: TemasState = {
    temas: [{ id: "", curso_id: '', capitulo_id: '', clase_id: '', nombre: '', numero: 0, activo: false }],
    tema: { id: "", curso_id: '', capitulo_id: '', clase_id: '', nombre: '', numero: 0, activo: false },
    isLoading: true
}

export const temaSlice = createSlice({
    name: 'temas',
    initialState,
    reducers: {
        setTema: (state, action) => {
            state.tema = action.payload
        },
        setTemas: (state, action) => {
            state.temas = action.payload
        },
        startLoadingTema: (state) => {
            state.isLoading = true;
        },
        endLoadingTema: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setTema,
    setTemas,
    startLoadingTema, 
    endLoadingTema 
} = temaSlice.actions

