import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface NoticiaState {
    id: string
    cid: string
    fecha: Date | ''
    titulo: string
    contenido: string
    activo: boolean
}

export interface NoticiasState {
    noticias: Array<NoticiaState>
    noticia: NoticiaState
    isLoading: boolean
}

const initialState: NoticiasState = {
    noticias: [{id: '', cid: '', fecha: '', titulo: '', contenido: '', activo: false}], 
    noticia: {id: '', cid: '', fecha: '', titulo: '', contenido: '', activo: false},
    isLoading: true
}

export const noticiaSlice = createSlice({
    name: 'noticias',
    initialState,
    reducers: {
        setNoticia: (state, action) => {
            state.noticia = action.payload
        },
        setNoticias: (state, action) => {
            state.noticias = action.payload
        },
        startLoadingNoticia: (state) => {
            state.isLoading = true;
        },
        endLoadingNoticia: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setNoticia,
    setNoticias,
    startLoadingNoticia, 
    endLoadingNoticia 
} = noticiaSlice.actions

