export interface IBoard {
    id: number;
    created_at: Date;
    title: string;
}

export interface ISupabaseResponce {
    data: any,
    error: any
}