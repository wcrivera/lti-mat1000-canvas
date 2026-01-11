import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface ItemState {
    id: number
    indent: number
    content_id: number
    module_id: number
    position: number
    published: boolean
    title: string
    type: string
    unpublishable: boolean
    external_url: string
    html_url: string
}

export interface ItemsState {
    items: Array<ItemState>
    item: ItemState
    isLoading: boolean
}

const initialState: ItemsState = {
    items: [{id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: ''}], 
    item: {id: 0, indent: 0, content_id: 0, module_id: 0, type: '', unpublishable: false, position: 0, published: false, title: '', external_url: '', html_url: ''},
    isLoading: true

}

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload
        },
        setItems: (state, action) => {
            state.items = action.payload
        },
        startLoadingItem: (state) => {
            state.isLoading = true;
        },
        endLoadingItem: (state) => {
            state.isLoading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setItem,
    setItems,
    startLoadingItem, 
    endLoadingItem 
} = itemSlice.actions

