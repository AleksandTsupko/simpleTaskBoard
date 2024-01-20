import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import supabase from "./supabaseClient"
import { IBoard } from "../../models/models"

const LS_BOARDS_KEY = "boards"

interface BoardsState {
    boards: IBoard[],
    selectedBoard: string | null
}

const initialState: BoardsState = {
    boards: JSON.parse(localStorage.getItem(LS_BOARDS_KEY) ?? "[]"),
    selectedBoard: JSON.parse(localStorage.getItem(LS_BOARDS_KEY) ?? "[]")[0]
}

export const supabaseSlice = createSlice({
    name: "supabase",
    initialState,
    reducers: {
        selectBoard(state, action: PayloadAction<string>) {
            state.selectedBoard = action.payload
        }

        
    }
})

export const supabaseActions = supabaseSlice.actions
export const supabaseReducer = supabaseSlice.reducer