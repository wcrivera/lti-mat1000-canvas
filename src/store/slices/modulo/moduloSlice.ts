import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModuloState {
    id: number
    items_url: string
    name: string
    position: number
    published: boolean
}

export interface ModulosState {
    modulos: Array<ModuloState>
    modulo: ModuloState
    isLoading: boolean
}

const initialState: ModulosState = {
    modulos: [{ id: 0, items_url: '', name: '', position: 0, published: false }],
    modulo: { id: 0, items_url: '', name: '', position: 0, published: false },
    isLoading: true
}

export const moduloSlice = createSlice({
    name: 'modulos',
    initialState,
    reducers: {
        setModulo: (state, action) => {
            state.modulo = action.payload
        },
        setModulos: (state, action) => {
            state.modulos = action.payload
        },
        startLoadingModulo: (state) => {
            state.isLoading = true;
        },
        endLoadingModulo: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setModulo,
    setModulos,
    startLoadingModulo, 
    endLoadingModulo 
} = moduloSlice.actions

