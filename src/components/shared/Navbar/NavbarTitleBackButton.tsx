import React, { useContext, useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text, Button, TouchableHighlight, DrawerLayoutAndroid } from 'react-native';
import Colors from '../../../utils/colors';
import { assets_images } from '../../../assets/assets_images';
import TouchableOpacityButton from '../../button/PressableButton';
import { global_styles } from '../../../styles/global';
import colors from '../../../utils/colors';
import { NavigationProvider } from '../../../navigators/NavigationContainer';
// import Router from '../../../navigators/router';


const NavbarTitleBackButton = ({
    title,
    backward
}: {
    title: string
    backward: string,
}) => {

    // const router: any = Router()
    const { navigation, drawerRef } = useContext(NavigationProvider)
    const onPress = () => {
        return drawerRef.current?.openDrawer()
    }
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
        <View style={styles.navbar}>
            <View>
                <TouchableOpacityButton
                    key={title}
                    imageStyle={{
                        width: 24,
                        height: 24
                    }}
                    onPress={() => { navigation.navigate({ link: backward }) }}
                    image={assets_images.arrow_left_indicate_light}
                    containerStyles={{
                        backgroundColor: 'transparent',
                        width: 36,
                        height: 36,
                        borderWidth: 0,
                    }}
                />
            </View>

            <View>
                <Text style={[global_styles.text_xl, global_styles.font_bold, { color: colors.primary_text }]}
                >
                    {
                        title
                    }
                </Text>
            </View>
            <View>
                <TouchableHighlight onPress={onPress}>
                    <View
                        style={styles.navbar_button}
                    >
                        <Image
                            source={assets_images.menu_navbar_light}
                            style={{ width: 32, height: 32 }}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        paddingHorizontal: 20,
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
        paddingLeft: 10,
        paddingRight: 10,
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
});

export default NavbarTitleBackButton;
