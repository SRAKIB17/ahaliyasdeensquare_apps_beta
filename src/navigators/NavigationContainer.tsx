import React, { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate, translateInterface } from '../translate/translate';
import { DrawerLayoutAndroid } from 'react-native';
import { navigate_link, navigate_linkInterface } from './navigate_link';


export interface navigationInterface {
    navigation: {
        navigate: (value: {
            link: string,
            title?: string,
            params?: { key: string; value?: string | number | undefined; }[]
        }) => void,
        params: {} | any,
        pathname: string,
        setParams: (props: { key: string; value?: string | number | undefined; }[]) => void,
    },
    translate: translateInterface,
    drawerRef: React.RefObject<DrawerLayoutAndroid>,
    navigate_link: navigate_linkInterface,
    loadingStart: boolean,
    loadingComponent: boolean,
    setLoadingStart: React.Dispatch<React.SetStateAction<boolean>>
    setLoadingComponent: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavigationProvider = createContext<navigationInterface>({
    navigation: {
        params: {},
        navigate(value) { },
        pathname: '',
        setParams: () => { },
    },
    translate: translate?.en,
    drawerRef: { current: null },
    navigate_link: navigate_link,
    loadingStart: false,
    setLoadingStart: () => { },
    loadingComponent: false,
    setLoadingComponent: () => { }
})

export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {

    const [screen, setScreen] = useState('/home');
    const [params, setAllParams] = useState<{}>({});
    const drawerRef = useRef<DrawerLayoutAndroid>(null);

    class navigation {
        navigate = async (value: {
            link: string,
            title?: string,
            params: [{ key: string | "", value: string | "" }]
        }) => {
            if (Boolean(value.params?.[0]?.key) && (Boolean(value.params?.[0]?.value) || value?.params?.[0]?.value == '0')) {
                console.log(value)

                const paramsObj: Array<{ [key: string]: any }> = value?.params?.map(r => {
                    return {
                        [r?.key]: r?.value
                    }
                })

                const mergedObject = Object.assign({}, ...paramsObj);

                const p = {
                    ...params,
                    ...mergedObject
                }
                setScreen(value?.link)
                setAllParams(p)
                await AsyncStorage.setItem('link', value?.link)
                await AsyncStorage.setItem('params', JSON.stringify(p))
            }
            else {
                setScreen(value?.link)
                await AsyncStorage.setItem('link', value?.link)
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



    const [language, setLanguage] = useState<translateInterface>(translate?.en)

    useEffect(() => {
        setLanguage(translate?.bn)
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

        AsyncStorage.getItem('link').then(r => {
            if (r) {
                setScreen(r)
            }
            else {
                setScreen('/home')
            }
        })

        AsyncStorage.getItem('params').then(r => {
            if (r) {
                setAllParams(JSON.parse(r))
            }
            else {
                setAllParams({})
            }
        })

    }, [screen])

    const navigationConstructor: any = new navigation();
    const [loadingStart, setLoadingStart] = useState<boolean>(false)
    const [loadingComponent, setLoadingComponent] = useState<boolean>(false)
    return (
        <NavigationProvider.Provider
            value={{
                loadingStart: loadingStart,
                setLoadingStart: setLoadingStart,
                navigation: navigationConstructor,
                translate: language,
                loadingComponent: loadingComponent,
                setLoadingComponent: setLoadingComponent,
                drawerRef: drawerRef,
                navigate_link: navigate_link
            }}
        >
            {
                children
            }
        </NavigationProvider.Provider>
    );
}