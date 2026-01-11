import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface DBQState {
    id: string
    cid: string
    mid: string
    bid: string
    sid: string
    qid: string
    uid: string
    fecha: Date | string
    respuesta: string
    estado: boolean | null
}

export interface DBQSState {
    dbqs: Array<DBQState>
    dbq: DBQState
    isLoading: boolean
}

const initialState: DBQSState = {
    dbqs: [],
    dbq: { id: '', cid: '', mid: '', bid: '', sid: '', qid: '', uid: '', fecha: '', respuesta: '', estado: null },
    isLoading: false
}

export const dbqSlice = createSlice({
    name: 'dbqs',
    initialState,
    reducers: {
        setDBQ: (state, action) => {
            state.dbq = action.payload
        },
        setDBQS: (state, action) => {
            state.dbqs = action.payload
        },
        startLoadingDBQ: (state) => {
            state.isLoading = true;
        },
        endLoadingDBQ: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setDBQ,
    setDBQS,
    startLoadingDBQ, 
    endLoadingDBQ 
} = dbqSlice.actions

