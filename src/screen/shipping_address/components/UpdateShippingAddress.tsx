import React, { useEffect, useState } from 'react';
import colors from '../../../utils/colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TouchableOpacityButton from '../../../components/button/TouchableOpacityButton';
import { global_styles } from '../../../styles/global';
import Toast from '../../../components/toast/Toast';
import DropDownPicker from '../../../components/dropdown/DropDownPicker';
import { translateInterface } from '../../../translate/translate';
import Input from '../../../components/input/Input';
import { assets_images } from '../../../assets/assets_images';
import districts from './districts.json'
import postcodes from './postcodes.json'
import PressableButton from '../../../components/button/PressableButton';
import axios from 'axios';
import { ref_token } from '../../../hooks/ref_token';
import { address_api } from '../../../config';

function UpdateShippingAddress({
    translate,
    setUpdateEntry,
    updateEntry,
    refetch,
}: {
    translate: translateInterface,
    updateEntry: any,
    refetch: () => void,
    setUpdateEntry: React.Dispatch<React.SetStateAction<{}>>
}) {
    const { update, phone, phone_error, alternate_phone_number, no_results_found, search_for_something, enter_valid_info_of_area_address, courier_service_address, address_label, area_address, select_area, select_city } = translate

    const [addressLabelInput, setAddressLabelInput] = useState(updateEntry?.addressLabel)
    const [countryInput, setCountryInput] = useState({ label: "Bangladesh", value: 'Bangladesh' });

    const [localAreaInput, setLocalAreaInput] = useState(updateEntry?.area);
    const [phoneInput, setPhoneInput] = useState(updateEntry?.phoneNumber);
    const [alternativePhoneInput, setAlternativePhonePhoneInput] = useState(updateEntry?.alternativePhoneNumber);

    const [courierInput, setCourierInput] = useState(updateEntry?.courierServiceAddress);

    const [selectCityInput, setSelectCityInput] = useState<{
        id?: number | string,
        label: string;
        value: string;
    }>({ label: "", value: "", id: '' })

    const [selectAreaInput, setSelectAreaInput] = useState<{
        id?: number | string,
        label: string;
        value: string;
    }>({ label: "", value: "" })

    useEffect(() => {
        setSelectAreaInput({ label: "", value: "", id: "" })
    }, [selectCityInput])
    const postcodesFilter: any = postcodes?.filter(r => r.id == selectCityInput?.id)


    const updateHandle = async () => {
        const address_info = {
            addressLabel: addressLabelInput,
            alternativePhoneNumber: alternativePhoneInput,
            area: localAreaInput,
            city: `${selectAreaInput?.label}, ${selectCityInput?.value}`,
            country: countryInput?.value,
            courierServiceAddress: courierInput,
            phoneNumber: phoneInput,
            shippingAddressID: updateEntry?.shippingAddressID
        }

        const { data } = await axios.put(`${address_api}`, address_info, {
            headers: {
                "ref_tkn": await ref_token()
            }
        })

        if (data?.success) {
            Toast({ text: 'Successfully update your address' })
            setUpdateEntry({})
            refetch()

            // if (!checkout) {
            //     submit_loading(false)
            //     router.push((return_url ? return_url : '/account/address'))
            // }
            // else {
            //     submit_loading(false)
            //     window.location.reload()
            // }
            // toast.success('Successfully create your address', {
            //     position: "top-right",
            //     icon: <LocationOutlineSVG color='red' strokeWidth='1' size='20' />,
            //     autoClose: 3000,
            //     closeOnClick: true,
            //     theme: "light"
            // });
        }
        else {
            Toast({ text: 'Something is wrong.Please try again' })
        }
    }

    return (
        <View style={{ display: "flex", gap: 16 }}>
            <View>
                <Text style={[global_styles.text_2xl, global_styles.font_medium]}>
                    {update}
                </Text>
            </View>
            {/* Address Laval */}
            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {address_label}
                </Text>
                <Input
                    setValue={setAddressLabelInput}
                    value={addressLabelInput}
                    defaultValue={updateEntry?.addressLabel}
                    placeholder={address_label}
                    toast={courier_service_address}
                />
            </View>

            {/* Phone number */}
            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {phone}
                </Text>
                <Input
                    setValue={setPhoneInput}
                    value={phoneInput}
                    placeholder={phone}
                    toast={phone_error}
                    defaultValue={updateEntry?.phoneNumber}
                    pattern={/^01\d{9}$/}
                />
            </View>
            {/*Alternate Phone number */}

            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {alternate_phone_number}
                </Text>
                <Input
                    setValue={setAlternativePhonePhoneInput}
                    value={alternativePhoneInput}
                    defaultValue={updateEntry?.alternativePhoneNumber}
                    placeholder={alternate_phone_number}
                    toast={phone_error}
                    pattern={/^01\d{9}$/}
                />
            </View>

            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {select_city}
                </Text>
                <DropDownPicker
                    setValue={setSelectCityInput}
                    searchPlaceholder={search_for_something}
                    value={selectCityInput}
                    noResultsFoundPlaceholder={no_results_found}
                    items={districts}
                    placeholder={select_city}
                />
            </View>
            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {select_area}
                </Text>
                <DropDownPicker
                    searchPlaceholder={search_for_something}
                    setValue={setSelectAreaInput}
                    value={selectAreaInput}
                    noResultsFoundPlaceholder={no_results_found}
                    items={postcodesFilter}
                    placeholder={select_area}
                />
            </View>
            {/*area address */}
            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {area_address}
                </Text>
                <Input
                    style={{ minHeight: 100 }}
                    setValue={setLocalAreaInput}
                    value={localAreaInput}
                    defaultValue={updateEntry?.area}
                    placeholder={'Mention the house/flat number, neighborhood name, area of contact (বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন)'}
                    multiline={true}
                    toast={enter_valid_info_of_area_address}
                    pattern={/^[0-9a-zA-Z\s,'-]*$/}
                />
            </View>

            {/*courier address */}
            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {courier_service_address}
                </Text>
                <Input
                    style={{ minHeight: 100 }}
                    setValue={setCourierInput}
                    value={courierInput}
                    defaultValue={updateEntry?.courierServiceAddress}
                    placeholder={courier_service_address}
                    multiline={true}
                    toast={courier_service_address}
                    pattern={/^[0-9a-zA-Z\s,'-]*$/}
                />
            </View>

            {
                // loading ?
                //     <PressableButton
                //         image={assets_images.loading_gif}
                //         imageStyle={{ height: 28, width: 28 }}
                //         textStyle={{ color: colors.primary_text }}
                //         onPress={() => Toast({ text: "Please wait" })}
                //         containerStyles={{ borderWidth: 0, height: 48, backgroundColor: colors.primary }}
                //     />
                //     :
                <PressableButton
                    disabled={(
                        !Boolean(addressLabelInput) ||
                        !Boolean(phoneInput) ||
                        !Boolean(alternativePhoneInput) ||
                        !Boolean(selectCityInput?.value) ||
                        !Boolean(selectAreaInput?.label) ||
                        !Boolean(localAreaInput) ||
                        !Boolean(courierInput)
                    )}
                    text={update}
                    textStyle={{ color: colors.primary_text }}
                    onPress={updateHandle}
                    containerStyles={{ borderWidth: 0, height: 48, backgroundColor: colors.primary }}
                />

            }
        </View>
    );
}

export default UpdateShippingAddress;


export const styles = StyleSheet.create({
    input: {
        borderColor: colors.primary,
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        padding: 8,
    },
});