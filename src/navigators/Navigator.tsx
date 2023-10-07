import React, { useContext, useEffect, useState } from 'react';
import { NavigationProvider } from './NavigationContainer';
import Router from './router';
import { BackHandler, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Footer from '../components/shared/Footer';
import colors from '../utils/colors';
import MainNavbar from '../components/shared/Navbar/MainNavbar';
import HomeScreen from '../screen/home/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PressableButton from '../components/button/PressableButton';
import ExitButton from './ExitButton';

const Navigator = () => {
    const { navigation, translate, drawerRef, navigate_link } = useContext(NavigationProvider)
    const rest = {
        navigation: navigation,
        translate,
        drawerRef,
        navigate_link
    }
    const router = Router(rest)


    const [exitApp, setExitApp] = useState<Boolean>(false)
    useEffect(() => {
        const backAction = () => {
            // if (navigation.pathname == '/home') {
            //     BackHandler.exitApp()
            // }
            // else {
            // navigation.navigate('/home')
            setExitApp(true)
            return true;
            // }
            // Disable the back button by returning true
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove(); // Cleanup the event listener on component unmount
    }, [navigation.pathname]);


    const Render: any = router?.component || function () {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 300, objectFit: 'contain' }} source={require('../assets/images/not_found.png')} />
            </View>)
    }


    // AsyncStorage.removeItem('link').then(r => {
    //     console.log(r)
    // })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
            {
                router?.navbar || <MainNavbar drawerRef={drawerRef} />
            }
            {
                exitApp &&
                <ExitButton
                    translate={translate}
                    setExitApp={setExitApp}
                />
            }

            <ScrollView
                // contentInsetAdjustmentBehavior="automatic"
                style={[
                    // backgroundStyle,
                    { paddingBottom: 80, display: 'flex' }]
                }
            >
                <Render {...rest} />
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
};

export default Navigator;
