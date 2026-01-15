import { createSlice } from '@reduxjs/toolkit';

export interface CursoState {
    id: string;
    nombre: string;
    descripcion: string;
    sigla: string;
}

export interface CursosState {
    cursos: Array<CursoState>
    curso: CursoState
    isLoading: boolean
}

const initialState: CursosState = {
    cursos: [{
        id: '',
        nombre: '',
        descripcion: '',
        sigla: ''
    }],
    curso: {
        id: '',
        nombre: '',
        descripcion: '',
        sigla: ''
    },
    isLoading: true
}

export const cursoSlice = createSlice({
    name: 'cursos',
    initialState,
    reducers: {
        setCursos: (state, action) => {
            state.cursos = action.payload
        },
        setCurso: (state, action) => {
            state.curso = action.payload
        },
        startLoadingCurso: (state) => {
            state.isLoading = true;
        },
        endLoadingCurso: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setCursos,
    setCurso,
    startLoadingCurso,
    endLoadingCurso
} = cursoSlice.actions

