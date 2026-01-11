import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface QuestionState {
    id: number
    quiz_id: number
    question_text: string
    points_possible: number
    question_type: string
    answers: Array<AnswerState>
    assessment_question_id: number
}

export interface OptionState {
    option: string
    roman: string
}

export interface AnswerState {
    id: number
    text: string
    weight: number
}

export interface QuestionsState {
    question: QuestionState
    questions: Array<QuestionState>
    isLoading: boolean
}

const initialState: QuestionsState = {
    question: {
        id: 0,
        quiz_id: 0,
        question_text: '',
        points_possible: 0,
        question_type: '',
        assessment_question_id: 0,
        answers: [{ id: 0, text: '', weight: 0 }]
    },
    questions: [{
        id: 0,
        quiz_id: 0,
        question_text: '',
        points_possible: 0,
        question_type: '',
        assessment_question_id: 0,
        answers: [{ id: 0, text: '', weight: 0 }]
    }],
    isLoading: false
}

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestion: (state, action) => {
            state.question = action.payload
        },
        setQuestions: (state, action) => {
            state.questions = action.payload
        },
        startLoadingQuestion: (state) => {
            state.isLoading = true;
        },
        endLoadingQuestion: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setQuestion,
    setQuestions,
    startLoadingQuestion,
    endLoadingQuestion
} = questionSlice.actions

