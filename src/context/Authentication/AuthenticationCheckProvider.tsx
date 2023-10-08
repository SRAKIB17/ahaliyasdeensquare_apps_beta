'use client'
import React, { createContext, useEffect, useReducer } from 'react';
import { actionTypeInterface, authenticationCheckProviderReducer, } from './AuthenticationReducer';
import { refresh_api } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ref_token } from '../../hooks/ref_token';


export const initialState = {
    role: null,
    isLoggedIn: false,
    isLoading: true,
    user_info: {},
    refetch: () => { }
}

export interface initialStateInterface {
    role: string,
    isLoading: any,
    user_info?: {
        userID?: number,
        name?: string,
        email?: string,
        phone?: string,
        defaultShippingAddress?: number,
        userType?: string,
        birthday?: string,
        rewardCoins?: number,
        lastLogin?: string,
        balance?: number,
        gender?: string,
        isBlock?: boolean,
        registered?: string,
        country?: string,
        verifiedEmail?: boolean,
    },
    isLoggedIn?: boolean,
    refetch: () => Promise<void> | any

}

export const AuthenticationCheck = createContext<initialStateInterface>({
    isLoading: false, role: '', user_info: {}, isLoggedIn: false, refetch: () => { }
});


const AuthenticationCheckProvider = (props: { children: React.ReactNode }) => {

    const [state, dispatch]: [initialStateInterface, (props: actionTypeInterface) => void] = useReducer(authenticationCheckProviderReducer, initialState);

    const run = async () => {
        try {
            dispatch({ type: 'LOADING' || '' });
            const res = await fetch(refresh_api, {
                headers: {
                    "ref_tkn": await ref_token()
                },
                method: "POST",
                body: JSON.stringify({})
            })
            const data = await res.json()
            if (data?.success) {
                dispatch({ type: 'SUCCESS', payload: data })
            }
            else {
                dispatch({ type: 'ERROR' });
            }
        }
        catch {
            dispatch({ type: 'ERROR' });
        }
    }
    useEffect(() => {
        run()
    }, [dispatch]);


    return (
        <AuthenticationCheck.Provider value={{ ...state, refetch: run }}>
            {props.children}
        </AuthenticationCheck.Provider>
    );
};

export default AuthenticationCheckProvider;