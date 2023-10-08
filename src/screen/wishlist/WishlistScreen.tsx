import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    FlatList,
    ScrollView,
} from 'react-native';
import WishlistEachProduct from './components/WishlistEachProduct';
import { global_styles } from '../../styles/global';
import { eachProductInterface } from '../../interface/each_product.interface';
import { navigationInterface } from '../../navigators/NavigationContainer';
import { fetchWishlist } from '../../fetch/fetch_wishlist';
import LoaderComponent from '../../navigators/LoaderComponent';


export const WishlistScreen = ({ translate }: navigationInterface) => {

    const [loading, setLoading] = useState(true)
    const [wishlists, setWishlists] = useState<eachProductInterface[]>([]);
    const { go_back, add_new_address } = translate

    const refetch = () => {
        fetchWishlist().then(data => {
            setWishlists(data?.result)
            setLoading(false)
        })
    }

    useEffect(() => {
        refetch()
    }, []);

    return (
        <SafeAreaView style={global_styles.container}>
            <View>
                {loading ?
                    <LoaderComponent />
                    :
                    <>
                        {
                            wishlists?.map((product, index) => {
                                return (
                                    <WishlistEachProduct product={product} key={product?.productID} />
                                )
                            })
                        }
                    </>
                }
            </View>
        </SafeAreaView>
    )
}
