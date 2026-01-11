import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface PreguntaState {
    cid: string
    mid: string
    eid: string
    pid: string
    numero: number
    tipo: string
    enunciado: string
    titulo: string
    respuesta: string
    inline: boolean
    width: number
    alternativas: Array<AlternativaState>
}

export interface OpcionState {
    opcion: string
    roman: string
}

export interface AlternativaState {
    alternativa: string
    letra: string
    estado: boolean
}

export interface PreguntasState {
    pregunta: PreguntaState
    preguntas: Array<PreguntaState>
    isLoading: boolean
}

const initialState: PreguntasState = {
    pregunta: {
        cid: '',
        mid: '',
        eid: '',
        pid: '',
        numero: 0,
        tipo: '',
        enunciado: '',
        titulo: '',
        respuesta: '',
        inline: false,
        width: 100,
        alternativas: [{ alternativa: '', letra: 'A', estado: false }, { alternativa: '', letra: 'B', estado: false }, { alternativa: '', letra: 'C', estado: false }, { alternativa: '', letra: 'D', estado: false }],
    },
    preguntas: [],
    isLoading: true
}

export const preguntaSlice = createSlice({
    name: 'preguntas',
    initialState,
    reducers: {
        setPregunta: (state, action) => {
            state.pregunta = action.payload
        },
        setPreguntas: (state, action) => {
            state.preguntas = action.payload
        },
        startLoadingPregunta: (state) => {
            state.isLoading = true;
        },
        endLoadingPregunta: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setPregunta,
    setPreguntas,
    startLoadingPregunta,
    endLoadingPregunta
} = preguntaSlice.actions

