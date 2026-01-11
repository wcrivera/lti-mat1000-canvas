import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface GrupoState {
    gid: string
    cid: string
    grupo: number
}

export interface GruposState {
    grupos: Array<GrupoState>
    grupo: GrupoState
    isLoading: boolean
}

const initialState: GruposState = {
    grupos: [{gid: '', cid: '', grupo: 100}], 
    grupo: {gid: '', cid: '', grupo: 100},
    isLoading: true
}

export const grupoSlice = createSlice({
    name: 'grupos',
    initialState,
    reducers: {
        setGrupo: (state, action) => {
            state.grupo = action.payload
        },
        setGrupos: (state, action) => {
            state.grupos = action.payload
        },
        startLoadingGrupo: (state) => {
            state.isLoading = true;
        },
        endLoadingGrupo: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setGrupo,
    setGrupos,
    startLoadingGrupo, 
    endLoadingGrupo 
} = grupoSlice.actions

