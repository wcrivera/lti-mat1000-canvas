import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface PaginaState {
    created_at: string
    editing_roles: string
    front_page: boolean
    hide_from_students: boolean
    html_url: string
    page_id: number
    last_edited_by: {
        id: number
        anonymous_id: string
        display_name: string
        avatar_image_url: string
        html_url: string
    }
    locked_for_user: boolean
    publish_at: null | string
    published: boolean
    title: string
    todo_date: null | string
    updated_at: string
    url: string
}
    

export interface PaginasState {
    paginas: Array<PaginaState>
    pagina: PaginaState
    isLoading: boolean
}

const initialState: PaginasState = {
    paginas: [{ created_at: '', editing_roles: '', front_page: false, hide_from_students: false, html_url: '', page_id: 0, last_edited_by: { id: 0, anonymous_id: '', display_name: '', avatar_image_url: '', html_url: '' }, locked_for_user: false, publish_at: null, published: false, title: '', todo_date: null, updated_at: '', url: '' }],
    pagina: { created_at: '', editing_roles: '', front_page: false, hide_from_students: false, html_url: '', page_id: 0, last_edited_by: { id: 0, anonymous_id: '', display_name: '', avatar_image_url: '', html_url: '' }, locked_for_user: false, publish_at: null, published: false, title: '', todo_date: null, updated_at: '', url: '' },
    isLoading: true

}

export const paginaSlice = createSlice({
    name: 'paginas',
    initialState,
    reducers: {
        setPagina: (state, action) => {
            state.pagina = action.payload
        },
        setPaginas: (state, action) => {
            state.paginas = action.payload
        },
        startLoadingPagina: (state) => {
            state.isLoading = true;
        },
        endLoadingPagina: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setPagina,
    setPaginas,
    startLoadingPagina,
    endLoadingPagina
} = paginaSlice.actions

