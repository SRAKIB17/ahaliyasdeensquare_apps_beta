import React, { createContext, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { assets_images } from '../../assets/assets_images';

export const LoadingProvider = createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => { })

const LoaderBgContext = (props: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true)
    return (
        <LoadingProvider.Provider value={setLoading} >
            {/* <Image
                source={assets_images.arrow_right_dark}
                style={{
                    width: 400,
                    height: 300,
                    top: '30%',
                    position: 'absolute',
                    zIndex: 10000000
                }}
            /> */}
            {props.children}
        </LoadingProvider.Provider>
    );
};

export default LoaderBgContext;