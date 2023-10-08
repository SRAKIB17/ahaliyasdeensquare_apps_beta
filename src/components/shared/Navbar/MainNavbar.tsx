import React, { useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text, Button, TouchableHighlight, DrawerLayoutAndroid, Pressable } from 'react-native';
import Colors from '../../../utils/colors';
import { assets_images } from '../../../assets/assets_images';
import SearchScreen from '../../../screen/search/SearchScreen';


const MainNavbar = ({ drawerRef }: { drawerRef: React.RefObject<DrawerLayoutAndroid> }) => {


    // <View style={styles.container}>

    //     <Text style={styles.paragraph}>
    //         Swipe from the side or press button below to see it!
    //     </Text>
    //     <Button
    //         title="Open drawer"
    //         onPress={() => drawer.current?.openDrawer()}
    //     />
    // </View>

    return (
        <>
            <View style={styles.navbar}>

                <View>
                    <Text style={{ fontSize: 24, fontWeight: '600', color: Colors.primary_text }}>
                        Ahaliyas
                    </Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    {/* 
                    <View>
                        <Pressable onPress={() => setIsVisible(true)}>
                            <View
                                style={styles.navbar_button}
                            >
                                <Image
                                    source={assets_images.search_white}
                                    style={{ height: 28, width: 28 }}
                                />
                            </View>
                        </Pressable>
                    </View> */}

                    <View>
                        <Pressable onPress={() => drawerRef.current?.openDrawer()}>
                            <View
                                style={styles.navbar_button}
                            >
                                <Image
                                    source={assets_images.menu_navbar_light}
                                    style={{ width: 32, height: 32 }}
                                />
                            </View>
                        </Pressable>
                    </View>
                </View>

                {/* ************** */}
                {/* <SearchScreen isVisible={isVisible} setIsVisible={setIsVisible} /> */}
                {/* <Button title='fsdf' /> */}
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        borderBottomColor: Colors.white,
        borderBottomWidth: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        color: 'black',
        height: 64,
        paddingHorizontal: 10,
        alignContent: 'space-between',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.00,
        elevation: 3,

    },
    navbar_button: {
        padding: 8,
    },

    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
});

export default MainNavbar;
