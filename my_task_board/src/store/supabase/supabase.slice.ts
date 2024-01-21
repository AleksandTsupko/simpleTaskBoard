import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import supabase from "./supabaseClient"
import { IBoard } from "../../models/models"

const LS_BOARDS_KEY = "boards"

interface BoardsState {
    selectedBoard: string | null
}

const initialState: BoardsState = {
    selectedBoard: localStorage.getItem("selectedBoard") ?? null
}

export const supabaseSlice = createSlice({
    name: "supabase",
    initialState,
    reducers: {
        selectBoard(state, action: PayloadAction<string>) {
            state.selectedBoard = action.payload
            localStorage.setItem("selectedBoard", action.payload)
        }

        
    }
})

export const supabaseActions = supabaseSlice.actions
export const supabaseReducer = supabaseSlice.reducer