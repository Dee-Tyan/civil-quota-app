import { createContext, useEffect, useReducer} from "react"
import { AuthReducer } from "./AuthReducer"

const initialState = localStorage.getItem("token")

export const AuthContext = createContext<any>({})

export const AuthContextProvider = (props:any) => {

    const [user, dispatch] = useReducer(AuthReducer, initialState)

    return (
        <>
        <AuthContext.Provider value={{user, dispatch}}>
          {props.children}
        </AuthContext.Provider>
        </>
    )
}


