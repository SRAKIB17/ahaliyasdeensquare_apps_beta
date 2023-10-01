import React, { useContext } from 'react';
import { Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TouchableOpacityButton from '../../components/button/PressableButton';
import { assets_images } from '../../assets/assets_images';
import CartProductItem from './components/CartProductItem';
import { NavigationProvider } from '../../navigators/NavigationContainer';
import translate_each_word from '../../db/translate_each_word';
import { global_styles } from '../../styles/global';
const products = [
    {
        id: '1',
        quantity: 1,
        item: {
            id: '1',
            title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
            avgRating: 4.2,
            ratings: 1325,
            price: 20.98,
            oldPrice: 24.06,
        }
    },
    {
        id: '2',
        quantity: 2,
        item: {
            id: '2',
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 32.98,
            oldPrice: 34.06,
        }
    },
    {
        id: '3',
        quantity: 1,
        option: 'Space Grey',
        item: {
            id: '5',
            title: "Mouse Havit Mechanical Keyboard Wired 89 Keys Gaming Keyboard",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 99.98,
            oldPrice: 120.06,
        }
    },
    {
        id: '1',
        quantity: 1,
        item: {
            id: '1',
            title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
            avgRating: 4.2,
            ratings: 1325,
            price: 20.98,
            oldPrice: 24.06,
        }
    },
    {
        id: '2',
        quantity: 2,
        item: {
            id: '2',
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 32.98,
            oldPrice: 34.06,
        }
    },
    {
        id: '3',
        quantity: 1,
        option: 'Space Grey',
        item: {
            id: '5',
            title: "Mouse Havit Mechanical Keyboard Wired 89 Keys Gaming Keyboard",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 99.98,
            oldPrice: 120.06,
        }
    },
];

export default function CartScreen() {
    const { navigate, pathname, translate } = useContext(NavigationProvider)
    const { my_account_menu } = translate_each_word()
    const { my_carts } = translate.my_carts

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={{ position: 'absolute' }}>
                        <TouchableOpacityButton
                            onPress={() => navigate('/profile')}
                            image={assets_images.arrow_right_dark}
                            imageStyle={{ transform: [{ rotate: "180deg" }] }}
                            containerStyles={{
                                backgroundColor: 'transparent',
                                width: 36,
                                height: 36,
                                borderWidth: 0,
                            }}
                        />
                    </View>
                    <View style={{ width: "100%", display: 'flex', justifyContent: "center", alignContent: 'center', flexDirection: 'row' }}>
                        <View>
                            <Text style={[global_styles.text_3xl, global_styles.font_bold]}
                            >
                                {
                                    my_carts
                                }
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.page} >
                    {/* subtotal and checkout  */}

                    <ScrollView>
                        {/* Render Product Items  */}
                        {
                            products?.map(r => {
                                return (
                                    <CartProductItem cartItem={r} key={r?.id} />
                                )
                            })
                        }
                    </ScrollView>
                    {/* <FlatList
                // refreshing={true}
                // onRefresh={() => {
                //     console.log(5435)
                // }}
                data={products}
                renderItem={
                    ({ item }) => <CartProductItem cartItem={item} />
                }
                showsVerticalScrollIndicator={true}
            /> */}
                </View>

            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 40
    },
    title: {
        display: 'flex',
        position: "relative",
        gap: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    page: {
        padding: 10,
    },
    subtotalText: {
        fontSize: 15,
    },
    subtotalAmount: {
        color: '#e47911',
        fontWeight: 'bold',
    },
});
