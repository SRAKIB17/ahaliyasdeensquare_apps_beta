import React, { useContext, useState } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../../../utils/colors';
import { global_styles } from '../../../styles/global';
import { NavigationProvider } from '../../../navigators/NavigationContainer';
import { shippingAddressInterface } from '../../../interface/shipping_address.interface';
import PressableButton from '../../../components/button/PressableButton';
import { assets_images } from '../../../assets/assets_images';
import axios from 'axios'
import { address_api, user_profile_api } from '../../../config';
import { ref_token } from '../../../hooks/ref_token';
import Toast from '../../../components/toast/Toast';
// import QuantitySelector from '../../../components/QuantitySelector/QuantitySelector';

export default function EachShippingAddress({
    address,
    refetch,
    setUpdateEntry,
}: {
    address: shippingAddressInterface,
    refetch: () => void,
    setUpdateEntry: React.Dispatch<React.SetStateAction<{}>>
}) {
    const { translate } = useContext(NavigationProvider)
    const { phone, shipping_address, courier_address, default_address } = translate;
    const [loading, setLoading] = useState(false);

    const deleteShippingAddress = async () => {
        try {
            setLoading(true)
            const { data } = await axios.delete(`${address_api}?address_id=${address.shippingAddressID}`, {
                headers: {
                    "ref_tkn": await ref_token()
                }
            })
            if (data?.success) {
                setLoading(false)
                refetch()
                Toast({ text: "Successfully delete" })
            }
            else {
                setLoading(false)
                refetch()
                Toast({ text: "Something is wrong.Please try again" })
            }
        }
        catch {
            Toast({ text: "Something is wrong.Please try again" })

        }
    }

    const [primaryLoading, setPrimaryLoading] = useState(false)
    const makePrimaryAddress = async (shippingAddressID: number) => {
        setPrimaryLoading(true)
        try {
            const { data } = await axios.put(`${user_profile_api}`, { defaultShippingAddress: shippingAddressID }, {
                headers: {
                    "ref_tkn": await ref_token()
                }
            })
            if (data?.success) {
                setPrimaryLoading(false)
                refetch()
                Toast({ text: "Successfully added" })
            }
            else {
                refetch()
                setPrimaryLoading(false)
                Toast({ text: 'Something is wrong.Please try again' });
            }
        }
        catch {
            setPrimaryLoading(false)
            Toast({ text: 'Something is wrong.Please try again' });
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ gap: 4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, }}>
                        <View>
                            <Text
                                style={[global_styles.font_extrabold, global_styles.text_lg, { textDecorationLine: 'underline', width: "100%" }]}
                            >
                                {address?.addressLabel}
                            </Text>
                        </View>
                        {
                            Boolean(address?.isDefaultShippingAddress) &&
                            <View style={{ alignItems: 'baseline' }}>
                                <Text style={styles.default_shipping_address}>
                                    {
                                        default_address
                                    }
                                </Text>
                            </View>
                        }
                    </View>
                    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                        {
                            !Boolean(address?.isDefaultShippingAddress) &&
                            <View>
                                {
                                    primaryLoading ?
                                        <ActivityIndicator size="small" color={colors.primary} />
                                        :
                                        <PressableButton
                                            onPress={() => makePrimaryAddress(address?.shippingAddressID)}
                                            image={assets_images.location3d}
                                            imageStyle={{ width: 20, height: 20 }}
                                            containerStyles={{
                                                backgroundColor: 'transparent',
                                                width: 32,
                                                height: 32,
                                            }}
                                        />
                                }
                            </View>
                        }
                        <View>
                            <PressableButton
                                onPress={() => { setUpdateEntry(address) }}
                                image={assets_images.edit3d}
                                imageStyle={{ width: 20, height: 20 }}
                                containerStyles={{
                                    backgroundColor: 'transparent',
                                    width: 32,
                                    height: 32,
                                }}
                            />
                        </View>
                        <View>
                            {
                                loading ?
                                    <ActivityIndicator size="small" color={colors.primary} />
                                    :
                                    <PressableButton
                                        onPress={deleteShippingAddress}
                                        image={assets_images.delete3d}
                                        imageStyle={{ width: 20, height: 20 }}
                                        containerStyles={{
                                            backgroundColor: 'transparent',
                                            width: 32,
                                            height: 32,
                                        }}
                                    />
                            }
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={[global_styles.text_base, global_styles.font_medium]}>
                        {phone}:
                    </Text>
                    <Text style={global_styles.text_sm}>
                        {
                            ` ${address?.phoneNumber}, ${address?.alternativePhoneNumber}`
                        }
                    </Text>
                </View>

                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium]}>
                        {shipping_address}:
                    </Text>
                    <Text style={global_styles.text_sm}>
                        {
                            ` ${address?.area}, ${address?.city}, ${address?.country}`
                        }
                    </Text>
                </View>

                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium]}>
                        {courier_address}:
                    </Text>
                    <Text style={global_styles.text_sm}>
                        {
                            ` ${address?.courierServiceAddress}`
                        }
                    </Text>
                </View>


            </View>
        </View >

    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border_color,
        borderRadius: 6,
        padding: 16,
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 6,
    },
    default_shipping_address: {
        ...global_styles.text_xs,
        backgroundColor: colors.info,
        color: colors.info_text,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 99999999,
    }
});
