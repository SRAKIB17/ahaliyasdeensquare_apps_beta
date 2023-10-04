import React, { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate, translateInterface } from '../translate/translate';
import { DrawerLayoutAndroid } from 'react-native';

export interface navigationInterface {
    navigation: {
        navigate: (value: string, paramsProps?: { key: string; value?: string | number | undefined; }[]) => void,
        params: {} | any,
        pathname: string,
        setParams: (props: { key: string; value?: string | number | undefined; }[]) => void,
    },
    translate: translateInterface,
    drawerRef: React.RefObject<DrawerLayoutAndroid>
}

export const NavigationProvider = createContext<navigationInterface>({
    navigation: {
        params: {},
        navigate(value, hasParams) { },
        pathname: '',
        setParams: () => { },
    },
    translate: translate?.en,
    drawerRef: { current: null }
})

export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {

    const [screen, setScreen] = useState('/home');
    const [params, setAllParams] = useState<{}>({});
    const drawerRef = useRef<DrawerLayoutAndroid>(null);

    class navigation {
        navigate = async (value: string, paramsProps = [{ key: '', value: '' }]) => {
            if (Boolean(paramsProps?.[0]?.key) && (Boolean(paramsProps?.[0]?.value) || paramsProps?.[0]?.value == '0')) {
                const paramsObj: Array<{ [key: string]: any }> = paramsProps?.map(r => {
                    return {
                        [r?.key]: r?.value
                    }
                })

                const mergedObject = Object.assign({}, ...paramsObj);


                const p = {
                    ...params,
                    ...mergedObject
                }
                setScreen(value)
                setAllParams(p)
                await AsyncStorage.setItem('link', value)
                await AsyncStorage.setItem('params', JSON.stringify(p))
            }
            else {
                setScreen(value)
                await AsyncStorage.setItem('link', value)
                await AsyncStorage.removeItem('params')
            }
        }

        setParams = async (paramsProps = [{ key: '', value: '' }]) => {
            const paramsObj: Array<{ [key: string]: any }> = paramsProps?.map(r => {
                return {
                    [r?.key]: r?.value
                }
            })
            const mergedObject = Object.assign({}, ...paramsObj);

            const p = {
                ...params,
                ...mergedObject
            }

            setAllParams(p)
            await AsyncStorage.setItem('params', JSON.stringify(p))
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

    useEffect(() => {
        AsyncStorage.getItem('language').then(r => {
            if (r == 'bn') {
                setLanguage(translate?.bn)
            }
            else {
                setLanguage(translate?.en)
            }
        })
    }, [screen])

    const navigationConstructor: any = new navigation()
    return (
        <NavigationProvider.Provider
            value={{
                navigation: navigationConstructor,
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