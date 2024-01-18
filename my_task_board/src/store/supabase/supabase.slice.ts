import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import supabase from "./supabaseClient"

const LS_BOARDS_KEY = "boards"

interface BoardsState {
    boards: string[]
}

const initialState: BoardsState = {
    boards: JSON.parse(localStorage.getItem(LS_BOARDS_KEY) ?? "[]")
}

export const supabaseSlice = createSlice({
    name: "supabase",
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<string>) {
            state.boards.push(action.payload)
            localStorage.setItem(LS_BOARDS_KEY, JSON.stringify(state.boards))
        }
    }
})

export const supabaseActions = supabaseSlice.actions
export const supabaseReducer = supabaseSlice.reducer