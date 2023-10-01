import React, { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate, translateInterface } from '../translate/translate';
import { DrawerLayoutAndroid } from 'react-native';

export interface navigationInterface {
    navigation: {
        navigate: (value: string) => void,
        params: {},
        pathname: string,
    },
    translate: translateInterface,
    drawerRef: React.RefObject<DrawerLayoutAndroid>
}

export const NavigationProvider = createContext<navigationInterface>({
    navigation: {
        params: {},
        navigate(value) { },
        pathname: ''
    },
    translate: translate?.en,
    drawerRef: { current: null }
})


export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {

    const [screen, setScreen] = useState('/home');
    const [params, setParams] = useState<{}>({});
    const drawerRef = useRef<DrawerLayoutAndroid>(null);

    class navigation {
        navigate = async (value: string) => {
            setScreen(value)
            await AsyncStorage.setItem('link', value)
        }
        get params() {
            return params
        }
        get pathname() {
            return screen
        }
    }


    AsyncStorage.getItem('link').then(r => {
        if (r) {
            setScreen(r)
        }
        else {
            setScreen('/home')
        }
    })

    const [language, setLanguage] = useState<translateInterface>(translate?.en)

    useEffect(() => {
        setLanguage(translate?.en)
        return () => { }
    }, [])

    AsyncStorage.getItem('language').then(r => {
        if (r == 'bn') {
            setLanguage(translate?.bn)
        }
        else {
            setLanguage(translate?.en)
        }
    })

    return (
        <NavigationProvider.Provider
            value={{
                navigation: new navigation(),
                translate: language,
                drawerRef: drawerRef
            }}
        >
            {
                children
            }
        </NavigationProvider.Provider>
    );
}