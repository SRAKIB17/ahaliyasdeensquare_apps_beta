import React, { useContext, useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProvider, navigationInterface } from '../../navigators/NavigationContainer';
import { global_styles } from '../../styles/global';
import { assets_images } from '../../assets/assets_images';
import colors from '../../utils/colors';
import TouchableOpacityButton from '../../components/button/TouchableOpacityButton';
import { navigate_link } from '../../navigators/navigate_link';
import PressableButton from '../../components/button/PressableButton';
import { AuthenticationCheck } from '../../context/Authentication/AuthenticationCheckProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HardReload from '../../hooks/ref_token';



export default function ProfileScreen({ navigation, drawerRef, translate, navigate_link }: navigationInterface) {

    const { log_out, sign_in, account_information, notifications, my_carts, my_orders, my_wishlists, shipping_address, support_tickets, settings, browser_history } = translate

    const my_account_menu = [
        {
            title: account_information,
            link: navigate_link.account_information,
            icon: assets_images.person3d,
            authentication: 'user'
        },
        {
            title: notifications,
            link: navigate_link.notifications,
            icon: assets_images.notifications3d,
            authentication: 'user/guest'
        },
        {
            title: my_orders,
            link: navigate_link.orders,
            icon: assets_images.orders3d,
            authentication: 'user'
        },
        {
            title: my_wishlists,
            link: navigate_link.wishlists,
            icon: assets_images.wishlists3d,
            authentication: 'user/guest'
        },
        {
            title: my_carts,
            link: navigate_link.carts,
            icon: assets_images.carts3d,
            authentication: 'user/guest'
        },
        {
            title: browser_history,
            link: navigate_link?.browser_history,
            icon: assets_images.browser_history3d,
            authentication: 'user/guest'
        },
        {
            title: `${shipping_address} DONe`,
            link: navigate_link?.shipping_address,
            icon: assets_images.shipping_address3d,
            authentication: 'user'
        },
        {
            title: support_tickets,
            link: navigate_link.support_tickets,
            icon: assets_images.support_ticket3d,
            authentication: 'user'
        },
        {
            title: settings,
            link: navigate_link?.settings,
            icon: assets_images.settings3d,
            authentication: 'user/guest'
        },
    ]
    const { isLoading, isLoggedIn, role, user_info, refetch } = useContext(AuthenticationCheck);

    const avatar = user_info?.gender?.toLowerCase() == 'male' ?
        assets_images.male_avatar :
        (
            user_info?.gender?.toLocaleLowerCase() == 'female' ?
                assets_images?.female_avatar :
                assets_images.male_avatar
        )
    useEffect(() => {
        // refetch()
        return () => {
        }
    }, [])

    return (
        <View style={global_styles.container}>

            <View style={{ display: 'flex', gap: 16, paddingBottom: 40 }}>

                {
                    isLoggedIn ?
                        <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', gap: 16 }}>

                            <View>
                                <Image source={avatar} style={{ width: 64, height: 64 }} />
                            </View>

                            <View>
                                <Text style={[global_styles.text_xl, global_styles.font_medium]}>
                                    {
                                        user_info?.name
                                    }
                                </Text>
                                <Text style={[global_styles.text_base, global_styles.font_normal]}>
                                    {
                                        user_info?.email
                                    }
                                </Text>
                            </View>

                        </View>
                        :
                        <View>
                            <PressableButton
                                text={sign_in}
                                textStyle={{ color: colors.secondary_text }}
                                onPress={() => navigation.navigate({ link: navigate_link.sign_in })}
                                containerStyles={{ height: 48, backgroundColor: colors.secondary }}
                            />
                        </View>
                }
            </View>

            <View style={{ borderTopColor: colors.border_color, borderTopWidth: 0.5 }}>
                {
                    my_account_menu?.map((r, index) => {
                        const check = isLoggedIn ?
                            r?.authentication?.includes(role)
                            :
                            r?.authentication?.includes('guest')

                        if (check) {
                            return (
                                <View key={index}>
                                    <Pressable onPress={() => navigation.navigate({ link: r?.link })}   >
                                        <View style={styles.button}>
                                            <View style={styles.button_title_image}>
                                                <View>
                                                    <Image
                                                        source={r?.icon}
                                                        style={{
                                                            height: 24, width: 24, objectFit: 'contain',
                                                        }}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={global_styles.text_lg}>
                                                        {
                                                            r?.title
                                                        }
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Image
                                                    source={assets_images.arrow_right_grey}
                                                    style={{
                                                        height: 16, objectFit: 'contain',
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                            )
                        }
                    })
                }
                {
                    isLoggedIn &&
                    <View>
                        <Pressable
                            onPress={async () => {
                                await AsyncStorage.removeItem('ref_tkn').then(() => {
                                    refetch()
                                    HardReload()
                                })
                            }}
                        >
                            <View style={styles.button}>
                                <View style={styles.button_title_image}>
                                    <View>
                                        <Image
                                            source={assets_images.sign_out3d}
                                            style={{
                                                height: 20, width: 20, objectFit: 'contain',
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={global_styles.text_lg}>
                                            {
                                                log_out
                                            }
                                        </Text>
                                    </View>
                                </View>

                                <View>
                                    <Image
                                        source={assets_images.arrow_right_grey}
                                        style={{
                                            height: 16, objectFit: 'contain',
                                        }}
                                    />
                                </View>
                            </View>
                        </Pressable>

                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 56,
        paddingVertical: 16,
        paddingHorizontal: 4,
        width: '100%',
        borderColor: colors.border_color,
        borderBottomWidth: 0.5,
    },
    button_title_image: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    }
});