

export const AuthReducer = (state, action) => {

    switch (action.type) {
        case "login":
            return {...state, user: action.payload}
    
        default:
            break;
    }
}