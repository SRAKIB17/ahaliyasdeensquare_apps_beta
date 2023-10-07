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

function AddNewShippingAddress({ translate }: { translate: translateInterface }) {
    const { add_new_address, phone, phone_error, alternate_phone_number, no_results_found, search_for_something, enter_valid_info_of_area_address, courier_service_address, address_label, area_address, select_area, select_city } = translate


    const [details, setDetails] = useState('')
    const [amount, setAmount] = useState<number>(0)
    const [title, setTitle] = useState('');
    const [typeExpense, setType] = useState<{
        label: string;
        value: string;
    }>({ label: "", value: "" })


    const [nameInput, setNameInput] = useState('');
    const [countryInput, setCountryInput] = useState({ label: "Bangladesh", value: 'Bangladesh' });
    const [emailInput, setEmailInput] = useState('');

    const [phoneInput, setPhoneInput] = useState('');
    const [alternativePhoneInput, setAlternativePhonePhoneInput] = useState('');

    const [passwordInput, setPasswordInput] = useState('');

    const addTimeSlots = async () => {
        if (!Boolean(amount) || !Boolean(details) || !Boolean(amount) || !Boolean(title) || !Boolean(typeExpense)) {
            Toast({
                text: "Please fill all input filled"
            })
        }
        else {
            // const add_new = {
            //     "id": transactionsDB?.length + 1,
            //     "datetime": new Date(),
            //     "title": title,
            //     "amount": amount,
            //     "details": details,
            //     "type": typeExpense?.value
            // }
            // AsyncStorage.setItem('transactions', JSON.stringify([...transactionsDB, add_new])).then(r => {
            //     setNewEntry(false)
            // })
        }
    }

    const [selectCity, setSelectCity] = useState<{
        id?: number | string,
        label: string;
        value: string;
    }>({ label: "", value: "", id: '' })

    const [selectArea, setSelectArea] = useState<{
        id?: number | string,
        label: string;
        value: string;
    }>({ label: "", value: "" })

    useEffect(() => {
        setSelectArea({ label: "", value: "", id: "" })
    }, [selectCity])
    const postcodesFilter = postcodes?.filter(r => r.id == selectCity?.id)

    return (
        <View style={{ display: "flex", gap: 16 }}>
            <View>
                <Text style={[global_styles.text_2xl, global_styles.font_medium]}>
                    {add_new_address}
                </Text>
            </View>
            {/* Address Laval */}
            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {address_label}
                </Text>
                <Input
                    style={{ minHeight: 100 }}
                    setValue={setAlternativePhonePhoneInput}
                    value={alternativePhoneInput}
                    placeholder={courier_service_address}
                    multiline={true}
                    toast={courier_service_address}
                    pattern={/^[0-9a-zA-Z\s,'-]*$/}
                />
            </View>

            {/* Contact number */}

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
                    pattern={/^[0-9|+]{11}$/}
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
                    placeholder={alternate_phone_number}
                    toast={phone_error}
                    pattern={/^[0-9|+]{11}$/}
                />
            </View>

            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    {select_city}
                </Text>
                <DropDownPicker
                    setValue={setSelectCity}
                    searchPlaceholder={search_for_something}
                    value={selectCity}
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
                    setValue={setSelectArea}
                    value={selectArea}
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
                    setValue={setAlternativePhonePhoneInput}
                    value={alternativePhoneInput}
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
                    setValue={setAlternativePhonePhoneInput}
                    value={alternativePhoneInput}
                    placeholder={courier_service_address}
                    multiline={true}
                    toast={courier_service_address}
                    pattern={/^[0-9a-zA-Z\s,'-]*$/}
                />
            </View>


        </View>
    );
}

export default AddNewShippingAddress;


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