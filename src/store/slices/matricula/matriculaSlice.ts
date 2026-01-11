import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface MatriculaState {
    mid: string
    cid: string
    gid: string
    uid: string
    rol: 'Estudiante' | 'Ayudante' | 'Profesor' | 'Administrador' | string
    online: boolean
}

export interface MatriculasState {
    matriculas: Array<MatriculaState>
    matricula: MatriculaState
    isLoading: boolean
}

const initialState: MatriculasState = {
    matriculas: [],
    matricula: { mid: '', cid: '', gid: '', uid: '', rol: 'Estudiante', online: false },
    isLoading: true
}

export const matriculaSlice = createSlice({
    name: 'matriculas',
    initialState,
    reducers: {
        setMatricula: (state, action) => {
            state.matricula = action.payload
        },
        setMatriculas: (state, action) => {
            state.matriculas = action.payload
        },
        startLoadingMatricula: (state) => {
            state.isLoading = true;
        },
        endLoadingMatricula: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setMatricula,
    setMatriculas,
    startLoadingMatricula, 
    endLoadingMatricula 
} = matriculaSlice.actions

