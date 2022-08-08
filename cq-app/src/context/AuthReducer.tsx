
import {LOGIN} from "./actions"

export const AuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", JSON.stringify(action.payload))
            return  action.payload
    
        default:
            break;
    }
}