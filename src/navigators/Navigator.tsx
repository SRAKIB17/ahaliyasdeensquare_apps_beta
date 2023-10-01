import React, { useContext, useState } from 'react';

import { NavigationProvider } from './NavigationContainer';
import Router from './router';
import { SafeAreaView, ScrollView } from 'react-native';
import Footer from '../components/shared/Footer';
import colors from '../utils/colors';
import MainNavbar from '../components/shared/Navbar/MainNavbar';

const Navigator = () => {
    const { pathname, navigation, translate, drawerRef } = useContext(NavigationProvider)

    const rest = {
        navigation: navigation,
        pathname: pathname,
        translate,
        drawerRef,
    }
    const router = Router(rest)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
            {
                router?.navbar || <MainNavbar drawerRef={drawerRef} />
            }
            <ScrollView
                // contentInsetAdjustmentBehavior="automatic"
                style={[
                    // backgroundStyle,
                    { paddingBottom: 80, display: 'flex' }]
                }
            >
                {
                    router?.component
                }
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
};

export default Navigator;
