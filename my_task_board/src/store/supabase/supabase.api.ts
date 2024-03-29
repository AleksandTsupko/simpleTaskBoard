import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IBoard, IChangeStageForTaskReq, INewStageValues, IStage, ISupabaseResponce, ITask } from "../../models/models"
import supabase from "./supabaseClient"
import { log } from "console"
import { INewTaskValues } from "../../components/Board/BoardButtons/NewTaskForm/NewTaskForm"

export const supabaseApi = createApi({
    reducerPath: "supabase/api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Boards","Tasks", "Stages"],
    endpoints: (build) => ({
        getBoards: build.query<IBoard[], string>({
            queryFn: async () => {
                const { data, error }: any = await supabase
                    .from("boards")
                    .select("*")

                return { data }
            },
            providesTags: res => ["Boards"]
        }),
        createNewBoard: build.mutation<IBoard, string>({
            queryFn: async (boardName: string) => {
                const { data, error }: any = await supabase
                    .from("boards")
                    .insert([{
                        title: boardName,
                        stages: ["Анализ"]
                    }])

                return { data }
            },
            invalidatesTags: ["Boards"]
        }),
        getStages: build.query<IStage[], number>({
            queryFn: async (boardId: number) => {
                const { data, error }: any = await supabase
                    .from("stages")
                    .select("*")
                    .eq("boardId", boardId)

                return { data }
            },
            providesTags: res => ["Stages"]
        }),
        createNewTask: build.mutation<ITask, INewTaskValues>({
            queryFn: async (newTaskValues: INewTaskValues) => {
                const { data, error }: any = await supabase
                    .from("tasks")
                    .insert([{
                        title: newTaskValues.title,
                        text: newTaskValues.text,
                        boardId: newTaskValues.boardId,
                        stageId: newTaskValues.stage?.id
                    }])

                return { data }
            },
            invalidatesTags: ["Tasks"]
        }),
        getTasks: build.query<ITask[], number>({
            queryFn: async (boardId: number) => {
                const { data, error }: any = await supabase
                    .from("tasks")
                    .select("*")
                    .eq("boardId", boardId)

                return { data }
            },
            providesTags: res => ["Tasks"]
        }),
        changeStageForTask: build.mutation<ITask, IChangeStageForTaskReq>({
            queryFn: async ({taskId, stageId}: IChangeStageForTaskReq) => {
                const { data, error }: any = await supabase
                    .from("tasks")
                    .update({stageId})
                    .eq("id", taskId)
    
                return { data }
            },
            invalidatesTags: ["Tasks"]
        }),
        createNewStage: build.mutation<IStage, INewStageValues>({
            queryFn: async (newStageValues: INewStageValues) => {
                const { data, error }: any = await supabase
                    .from("stages")
                    .insert([{
                        title: newStageValues.title,
                        boardId: newStageValues.boardId,
                    }])

                return { data }
            },
            invalidatesTags: ["Stages"]
        })
    })

})
export const { useGetBoardsQuery, 
    useCreateNewBoardMutation, 
    useGetStagesQuery, 
    useCreateNewTaskMutation, 
    useLazyGetStagesQuery,
    useLazyGetTasksQuery,
    useChangeStageForTaskMutation,
    useCreateNewStageMutation } = supabaseApi