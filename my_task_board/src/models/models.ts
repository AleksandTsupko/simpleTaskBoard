export interface IBoard {
    id: number;
    created_at: Date;
    title: string;
    stages: string[]
}

export interface IStage {
    id: number;
    created_at: Date;
    title: string;
    boardId: number
}

export interface ISupabaseResponce {
    data: any,
    error: any
}