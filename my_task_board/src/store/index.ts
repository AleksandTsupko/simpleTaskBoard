import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { supabaseReducer } from "./supabase/supabase.slice";
import { supabaseApi } from "./supabase/supabase.api";

export const store = configureStore({
    reducer: {
        [supabaseApi.reducerPath]: supabaseApi.reducer,
        supabase: supabaseReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(supabaseApi.middleware),
})


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>