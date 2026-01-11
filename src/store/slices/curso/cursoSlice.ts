import { createSlice } from '@reduxjs/toolkit';

export interface CursoState {
    account_id: number, 
    course_code: string,
    course_color: string | null,
    created_at: string
    default_view: string
    id: number
    is_public: boolean
    is_public_to_auth_users: boolean
    license: string
    locale: string
    name: string
    public_syllabus: boolean
    public_syllabus_to_auth: boolean
    restrict_enrollments_to_course_dates: boolean
    root_account_id: number
    sigla: string
    start_at: string | null
    storage_quota_mb: number
    template: boolean
    time_zone: string
    uuid: string
    workflow_state: string
}

export interface CursosState {
    cursos: Array<CursoState>
    curso: CursoState
    isLoading: boolean
}

const initialState: CursosState = {
    cursos: [{
        account_id: 0, 
        course_code: '',
        course_color: null,
        created_at: '',
        default_view: '',
        id: 0,
        is_public: false,
        is_public_to_auth_users: false,
        license: '',
        locale: '',
        name: '',
        public_syllabus: false,
        public_syllabus_to_auth: false,
        restrict_enrollments_to_course_dates: false,
        root_account_id: 0,
        sigla: '',
        start_at: null,
        storage_quota_mb: 0,
        template: false,
        time_zone: '',
        uuid: '',
        workflow_state: ''
    }],
    curso: {
        account_id: 0, 
        course_code: '',
        course_color: null,
        created_at: '',
        default_view: '',
        id: 0,
        is_public: false,
        is_public_to_auth_users: false,
        license: '',
        locale: '',
        name: '',
        public_syllabus: false,
        public_syllabus_to_auth: false,
        restrict_enrollments_to_course_dates: false,
        root_account_id: 0,
        sigla: '',
        start_at: null,
        storage_quota_mb: 0,
        template: false,
        time_zone: '',
        uuid: '',
        workflow_state: ''
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

