import { createSlice } from '@reduxjs/toolkit';

export interface UsuarioState {
    created_at: string
    id: number
    name: string
    short_name: string
    sortable_name: string
}

export interface UsuariosState {
    usuarios: Array<UsuarioState>
    usuario: UsuarioState,
    id: string,
    isLoading: boolean,
    update: boolean
}

const initialState: UsuariosState = {
    usuarios: [{ created_at: '', id: 0, name: '', short_name: '', sortable_name: '' }],
    usuario: { created_at: '', id: 0, name: '', short_name: '', sortable_name: '' },
    id: '',
    isLoading: true,
    update: false
}

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        startUpdateUsuario: (state) => {
            state.update = true;
        },
        endUpdateUsuario: (state) => {
            state.update = false;
        },
        startLoadingUsuario: (state) => {
            state.isLoading = true;
        },
        endLoadingUsuario: (state) => {
            state.isLoading = false;
        },
        logout: (state) => {
            localStorage.clear();
            state.usuario = initialState.usuario;
        },
        setUsuario: (state, action) => {
            state.usuario = action.payload
        },
        setUsuarios: (state, action) => {
            state.usuarios = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingUsuario, endLoadingUsuario, startUpdateUsuario, endUpdateUsuario, logout, setUsuario, setUsuarios, setId } = usuarioSlice.actions

