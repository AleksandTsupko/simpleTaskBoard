import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { supabaseReducer } from "./supabase/supabase.slice";

export const store = configureStore({
    reducer: {
        supabase: supabaseReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
})


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>