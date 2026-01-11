import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface DBPState {
    id: string
    cid: string
    mid: string
    pid: string
    uid: string
    fecha: Date | string
    respuesta: string
    estado: boolean | null
}

export interface DBPSState {
    dbps: Array<DBPState>
    dbp: DBPState
    isLoading: boolean
}

const initialState: DBPSState = {
    dbps: [],
    dbp: { id: '', cid: '', mid: '', pid: '', uid: '', fecha: '', respuesta: '', estado: null },
    isLoading: false
}

export const dbpSlice = createSlice({
    name: 'dbps',
    initialState,
    reducers: {
        setDBP: (state, action) => {
            state.dbp = action.payload
        },
        setDBPS: (state, action) => {
            state.dbps = action.payload
        },
        startLoadingDBP: (state) => {
            state.isLoading = true;
        },
        endLoadingDBP: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setDBP,
    setDBPS,
    startLoadingDBP, 
    endLoadingDBP 
} = dbpSlice.actions

