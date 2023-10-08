import { initialStateInterface } from "./AuthenticationCheckProvider";

export const actionType = {
    LOADING: 'LOADING',
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
}

export interface actionTypeInterface {
    payload?: any,
    type: 'LOADING' | "SUCCESS" | "ERROR"
}


export const authenticationCheckProviderReducer = (state: any, action: actionTypeInterface) => {
    switch (action.type) {
        case actionType.LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actionType.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user_info: action?.payload?.result?.[0],
                role: action?.payload?.role,
            };
        case actionType.ERROR:
            return {
                ...state,
                isLoading: false,
                user_info: undefined
            };

        default:
            return state
    }

}