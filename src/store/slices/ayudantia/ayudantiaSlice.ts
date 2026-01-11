import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface AyudantiaState {
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

export interface AyudantiasState {
    ayudantia: AyudantiaState
    ayudantias: Array<AyudantiaState>
    isLoading: boolean
}

const initialState: AyudantiasState = {
    ayudantias: [{id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: ''}], 
    ayudantia: {id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: ''},
    isLoading: true
}

export const ayudantiaSlice = createSlice({
    name: 'ayudantias',
    initialState,
    reducers: {
        setAyudantia: (state, action) => {
            state.ayudantia = action.payload
        },
        setAyudantias: (state, action) => {
            state.ayudantias = action.payload
        },
        startLoadingAyudantia: (state) => {
            state.isLoading = true;
        },
        endLoadingAyudantia: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setAyudantia,
    setAyudantias,
    startLoadingAyudantia,
    endLoadingAyudantia
} = ayudantiaSlice.actions

