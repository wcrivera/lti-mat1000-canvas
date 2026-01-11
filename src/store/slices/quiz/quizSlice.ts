import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface QuizState {
    qid: string
    cid: string
    mid: string
    bid: string
    sid: string
    numero: number
    tipo: string
    enunciado: string
    respuesta: string
    width: number
    alternativas: Array<AlternativaState>
}

export interface ScoreState {
    id: number
    name: string
    course_id: number
    quiz_id: number
    user_id: number
    score: number
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

export interface QuizzesState {
    quiz: QuizState
    quizzes: Array<QuizState>
    score: ScoreState
    scores: Array<ScoreState>
    isLoading: boolean
}

const initialState: QuizzesState = {
    score: { id: 0, name: '', course_id: 0, quiz_id: 0, user_id: 0, score: 0 },
    scores: [{ id: 0, name: '', course_id: 0, quiz_id: 0, user_id: 0, score: 0 }],
    quiz: {
        qid: '',
        cid: '',
        mid: '',
        bid: '',
        sid: '',
        numero: 0,
        tipo: '',
        enunciado: '',
        respuesta: '',
        width: 100,
        alternativas: [{ alternativa: '', letra: 'A', estado: false }, { alternativa: '', letra: 'B', estado: false }, { alternativa: '', letra: 'C', estado: false }, { alternativa: '', letra: 'D', estado: false }],
    },
    quizzes: [],
    isLoading: false
}

export const quizSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        setScore: (state, action) => {
            state.score = action.payload
        },
        setScores: (state, action) => {
            state.scores = action.payload
        },
        setQuiz: (state, action) => {
            state.quiz = action.payload
        },
        setQuizzes: (state, action) => {
            state.quizzes = action.payload
        },
        startLoadingQuiz: (state) => {
            state.isLoading = true;
        },
        endLoadingQuiz: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setScore,
    setScores,
    setQuiz,
    setQuizzes,
    startLoadingQuiz,
    endLoadingQuiz
} = quizSlice.actions

