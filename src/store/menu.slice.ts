import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type MenuValues = 'burger' | 'filter' | ''

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        value: '' as MenuValues
    },
    reducers: {
        openModal: (state, modal: PayloadAction<MenuValues>) => { state.value = modal.payload; },
        closeModal: (state) => { state.value = ''; }
    }
})

export const { openModal, closeModal } = menuSlice.actions

export default menuSlice.reducer