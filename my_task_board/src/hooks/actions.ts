import { useDispatch } from "react-redux"
import { supabaseActions } from "../store/supabase/supabase.slice"
import { bindActionCreators } from "@reduxjs/toolkit"

const actions = {
    ...supabaseActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}