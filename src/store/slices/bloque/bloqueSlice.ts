import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface BloqueState {
    id: number
    indent: number
    content_id: number
    module_id: number
    position: number
    published: boolean
    title: string
    type: string
    unpublishable: boolean
    external_url: string
    html_url: string
}

export interface BloquesState {
    bloques: Array<BloqueState>
    bloque: BloqueState
    isLoading: boolean
}

const initialState: BloquesState = {
    bloques: [{id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: ''}], 
    bloque: {id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: ''},
    isLoading: true

}

export const bloqueSlice = createSlice({
    name: 'bloques',
    initialState,
    reducers: {
        setBloque: (state, action) => {
            state.bloque = action.payload
        },
        setBloques: (state, action) => {
            state.bloques = action.payload
        },
        startLoadingBloque: (state) => {
            state.isLoading = true;
        },
        endLoadingBloque: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setBloque,
    setBloques,
    startLoadingBloque, 
    endLoadingBloque 
} = bloqueSlice.actions

