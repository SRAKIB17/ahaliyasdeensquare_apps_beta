import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import colors from '../../utils/colors';
import { assets_images } from '../../assets/assets_images';
import { global_styles } from '../../styles/global';
import { Height, Width } from '../../utils/dimensions';
import Input from '../input/Input';
import Toast from '../toast/Toast';



function DropDownPicker({
    setValue = () => { },
    value,
    items,
    placeholder = 'Please select',
    searchPlaceholder = "Search for something",
    noResultsFoundPlaceholder = "No results found",
    asset,
    defaultValue
}:
    {
        noResultsFoundPlaceholder?: string,
        value: {
            id?: number | string,
            label: string;
            value: string;
        },
        defaultValue?: {
            id?: number | string,
            label: string;
            value: string;
        },
        setValue: React.Dispatch<React.SetStateAction<{
            id?: number | string,
            label: string;
            value: string;
        }>>
        items: {
            id?: number | string,
            label: string;
            value: string;
        }[],
        searchPlaceholder?: string,
        placeholder?: string,
        asset?: number,
        required?: boolean
    }) {

    const [isVisible, setIsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');



    const [searchValue, setSearchValue] = useState('');

    const [searchItems, setSearchItems] = useState<{

        id?: number | string,
        label: string;
        value: string;
    }[]>([])

    useEffect(() => {

        const filter = items?.filter(r => {
            const value = r?.value?.toLowerCase()?.includes(searchValue?.toLowerCase());
            const label = r?.label?.toLowerCase()?.includes(searchValue?.toLowerCase());
            return value || label
        })
        if (!Boolean(filter?.length) && Boolean(searchValue)) {
            Toast({ text: noResultsFoundPlaceholder })
        }
        if (filter?.length) {
            setSearchItems(filter)
        }
        else {
            setSearchItems(items)
        }
    }, [searchValue, items])

    useEffect(() => {
        if (defaultValue?.label) {
            setValue(defaultValue)
        }
        return () => {

        }
    }, [defaultValue])

    return (
        <View style={styles.main_select}>

            <Pressable onPress={() => setIsVisible(true)}>
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
                                transform: [{ rotate: (!isVisible ? "90deg" : "270deg") }]
                            }}
                        />
                    </View>
                </View>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible && Boolean(items?.length)}
                onRequestClose={() => setIsVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={[{ paddingBottom: 10, }]}>
                        <Text style={[global_styles.text_xl, global_styles.font_medium]}>
                            {placeholder}
                        </Text>
                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <Input
                            style={{ height: 48 }}
                            setValue={setSearchValue}
                            value={searchValue}
                            placeholder={searchPlaceholder}
                        />
                    </View>
                    <ScrollView>
                        {searchItems?.map((option, index) => {
                            return (
                                <Pressable
                                    key={index}
                                    onPress={() => {
                                        setValue(option)
                                        setIsVisible(false);
                                    }}
                                >
                                    <View style={styles.item}>
                                        <Text>{option?.label}</Text>
                                    </View>
                                </Pressable>
                            )
                        })}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

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

    modal: {
        height: Height(100),
        padding: 8,
        paddingVertical: 64,
        backgroundColor: 'white',
    },

});

export default DropDownPicker;
