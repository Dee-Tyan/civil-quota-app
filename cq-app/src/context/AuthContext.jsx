import { createContext, useEffect, useReducer} from "react"
import { AuthReducer } from "./AuthReducer"

const initialState = {}

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {

    const [user, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(() => {
     localStorage.setItem("token", JSON.stringify(user))
    },[user])

    return (
        <>
        <AuthContext.Provider value={user, dispatch}>
          {props.children}
        </AuthContext.Provider>
        </>
    )
}


