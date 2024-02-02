import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import supabase from "./supabaseClient"
import { IBoard, ITask } from "../../models/models"

const LS_BOARDS_KEY = "boards"

interface BoardsState {
    selectedBoard: number | null,
    isShowModal: boolean,
    draggedTaskId: number | null,
}

const initialState: BoardsState = {
    selectedBoard: Number(localStorage.getItem("selectedBoard") ?? null),
    isShowModal: false,
    draggedTaskId: null,
}

export const supabaseSlice = createSlice({
    name: "supabase",
    initialState,
    reducers: {
        selectBoard(state, action: PayloadAction<number>) {
            state.selectedBoard = action.payload
            localStorage.setItem("selectedBoard", String(action.payload))
        },
        setIsShowModal(state, action: PayloadAction<boolean>) {
            state.isShowModal = action.payload
        },
        setDraggedTaskId(state, action: PayloadAction<number | null>) {
            state.draggedTaskId = action.payload
        }
    }
})

export const supabaseActions = supabaseSlice.actions
export const supabaseReducer = supabaseSlice.reducer