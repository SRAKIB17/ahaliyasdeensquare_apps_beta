import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import EachShippingAddress from './components/EachShippingAddress';
import { global_styles } from '../../styles/global';
import { fetchShippingAddress } from '../../fetch/fetch_shipping_address';
import { shippingAddressInterface } from '../../interface/shipping_address.interface';
import LoaderComponent from '../../navigators/LoaderComponent';
import AddNewShippingAddress from './components/AddNewShippingAddress';
import { navigationInterface } from '../../navigators/NavigationContainer';
import PressableButton from '../../components/button/PressableButton';
import colors from '../../utils/colors';
import UpdateShippingAddress from './components/UpdateShippingAddress';


export default function ShippingAddressScreen({ translate }: navigationInterface) {
    const [addNew, setAddNew] = useState(false)
    const [updateEntry, setUpdateEntry] = useState<{}>({})
    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState<shippingAddressInterface[]>([]);
    const { go_back, add_new_address } = translate
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

            <View style={{ alignItems: 'flex-end', paddingBottom: 6 }}>
                <PressableButton
                    onPress={() => {
                        if (Boolean(Object.values(updateEntry)?.length)) {
                            setUpdateEntry({})
                        }
                        else {
                            setAddNew(!addNew)
                            setUpdateEntry({})
                        }
                    }}
                    text={
                        Boolean(Object.values(updateEntry)?.length) ? go_back : (addNew ? go_back : add_new_address)
                    }
                    containerStyles={{ height: 40, backgroundColor: colors.primary, borderWidth: 0, paddingHorizontal: 16 }}
                    textStyle={{ color: colors.primary_text }}
                />
            </View>
            {
                Boolean(Object.values(updateEntry)?.length) &&
                <UpdateShippingAddress
                    refetch={refetch}
                    translate={translate}
                    setUpdateEntry={setUpdateEntry}
                    updateEntry={updateEntry}
                />
            }
            {
                addNew &&
                <AddNewShippingAddress
                    translate={translate}
                    setAddNew={setAddNew}
                    refetch={refetch}
                />
            }
            <>
                {
                    loading ?
                        <LoaderComponent />
                        :
                        <>
                            {
                                Boolean(addNew) || Boolean(Object.values(updateEntry)?.length) ||
                                <View>
                                    {
                                        address?.map(address => {
                                            return (
                                                <EachShippingAddress
                                                    setUpdateEntry={setUpdateEntry}
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
