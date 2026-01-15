import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface CapituloState {
    id: string
    curso_id: string
    nombre: string
    numero: number
    activo: boolean
}

export interface CapitulosState {
    capitulos: Array<CapituloState>
    capitulo: CapituloState
    isLoading: boolean
}

const initialState: CapitulosState = {
    capitulos: [{ id: '', curso_id: '', nombre: '', numero: 0, activo: false }],
    capitulo: { id: '', curso_id: '', nombre: '', numero: 0, activo: false },
    isLoading: true
}

export const capituloSlice = createSlice({
    name: 'capitulos',
    initialState,
    reducers: {
        setCapitulo: (state, action) => {
            state.capitulo = action.payload
        },
        setCapitulos: (state, action) => {
            state.capitulos = action.payload
        },
        startLoadingCapitulo: (state) => {
            state.isLoading = true;
        },
        endLoadingCapitulo: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setCapitulo,
    setCapitulos,
    startLoadingCapitulo, 
    endLoadingCapitulo 
} = capituloSlice.actions

