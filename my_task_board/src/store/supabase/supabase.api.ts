import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IBoard, ISupabaseResponce } from "../../models/models"
import supabase from "./supabaseClient"
import { log } from "console"

export const supabaseApi = createApi({
    reducerPath: "supabase/api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Boards"],
    endpoints: (build) => ({
        getBoards: build.query<IBoard[], string>({
            queryFn: async () => {
                const { data, error }: any = await supabase
                    .from("board")
                    .select("*")

                return { data }
            },
            providesTags: res => ["Boards"]
        }),
        createNewBoard: build.mutation<IBoard, string>({
            queryFn: async (boardName: string) => {
                const { data, error }: any = await supabase
                    .from("board")
                    .insert([{title: boardName}])

                return { data }
            },
            invalidatesTags: ["Boards"]
        })
    })

})
export const {useGetBoardsQuery, useCreateNewBoardMutation} = supabaseApi