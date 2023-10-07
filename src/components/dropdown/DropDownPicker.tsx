import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import { assets_images } from '../../assets/assets_images';
import { global_styles } from '../../styles/global';
import { Height, Width } from '../../utils/dimensions';

function DropDownPicker({
    setValue,
    value,
    items,
    placeholder = 'Please select',
    asset,
    defaultValue
}:
    {
        value: {
            label: string;
            value: string;
        },
        defaultValue?: {
            label: string;
            value: string;
        },
        setValue: React.Dispatch<React.SetStateAction<{
            label: string;
            value: string;
        }>>
        items: {
            label: string;
            value: string;
        }[],

        placeholder?: string,
        asset?: number,
        required?: boolean
    }) {
    useEffect(() => {
        if (defaultValue?.label) {
            setValue(defaultValue)
        }
        return () => {

        }
    }, [defaultValue])

    const [open, setOpen] = useState(false);
    return (
        <SafeAreaView style={styles.main_select}>
            {
                open &&
                <ScrollView
                    // contentContainerStyle={{ flexGrow: 1 }}
                    style={styles.items}
                >
                    {
                        items?.map((r) => {
                            return (
                                <View key={r?.value} style={{ width: '100%' }}>
                                    <TouchableOpacity onPress={() => {
                                        setValue(r)
                                        setOpen(false)
                                    }}>
                                        <View style={[styles.item]}>
                                            <Text style={global_styles.text_base}>
                                                {
                                                    r?.label
                                                }
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            }
            <TouchableOpacity onPress={() => setOpen(!open)}>
                <View style={styles.select}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'flex-start', gap: 4 }}>
                        {
                            asset ?
                                <View>
                                    <Image
                                        source={asset}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            objectFit: 'contain',
                                        }}
                                    />
                                </View>
                                :
                                <>
                                </>
                        }

                        <View>
                            <Text style={[global_styles.text_base, {
                                color: (value?.label ? colors.black : colors.grey),
                                textTransform: "capitalize"
                            }]}>
                                {value?.label ? value?.label : placeholder}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Image
                            source={assets_images.arrow_right_grey}
                            style={{
                                width: 16, height: 16, objectFit: 'contain',
                                transform: [{ rotate: (open ? "90deg" : "270deg") }]
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    main_select: {
        backgroundColor: colors.white,
        position: 'relative',
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        borderColor: colors.primary,
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        padding: 8,
    },
    select: {
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        width: Width(90),
        height: 48,
    },
    items: {
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 48,
        width: '105%',
        overflow: 'scroll',
        // maxHeight: 400,
        // height: '100%',
        zIndex: 200,
    },
    item: {
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        borderColor: colors.primary,
        borderWidth: 0.5,
        flex: 1,
        height: 48,
        width: '100%',
        paddingHorizontal: 16,
        padding: 8,
    },
});


export default DropDownPicker;