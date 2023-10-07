import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import EachShippingAddress from './components/EachShippingAddress';
import { global_styles } from '../../styles/global';
import { fetchShippingAddress } from '../../fetch/fetch_shipping_address';
import { shippingAddressInterface } from '../../interface/shipping_address.interface';
import LoaderComponent from '../../navigators/LoaderComponent';
import AddNewShippingAddress from './components/AddNewShippingAddress';
import { navigationInterface } from '../../navigators/NavigationContainer';


export default function ShippingAddressScreen({ translate }: navigationInterface) {
    const [addNew, setAddNew] = useState(true)
    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState<shippingAddressInterface[]>([]);
    const refetch = () => {
        fetchShippingAddress().then(address => {
            setAddress(address?.result)
            setLoading(false)
        })
    }

    useEffect(() => {
        refetch()
    }, []);

    return (
        <SafeAreaView style={global_styles.container}>
            <AddNewShippingAddress translate={translate} />
            <>
                {
                    loading ?
                        <LoaderComponent />
                        :
                        <>
                            {
                                Boolean(addNew) ||
                                <View>
                                    {
                                        address?.map(address => {
                                            return (
                                                <EachShippingAddress
                                                    address={address}
                                                    key={address?.shippingAddressID}
                                                    refetch={refetch}
                                                />
                                            )
                                        })
                                    }
                                </View>
                            }
                        </>
                }
            </>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
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
