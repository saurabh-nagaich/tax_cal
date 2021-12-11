import { combineReducers } from "redux"
import userReducer from "./userData/userReducer"

const rootReducer = combineReducers({
    user:userReducer
})

export default rootReducer