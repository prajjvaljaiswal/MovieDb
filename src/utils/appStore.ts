import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "./movieSlice"

const appStore= configureStore(
    {
        reducer:{
            movie: movieReducer
        }
    }
)
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore;