import React, { useState, useContext } from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native';
import Input from '../../../components/input/Input';
import { global_styles } from '../../../styles/global';
import { assets_images } from '../../../assets/assets_images';
import TouchableOpacityButton from '../../../components/button/TouchableOpacityButton';
import colors from '../../../utils/colors';
import { Height } from '../../../utils/dimensions';
import { navigationInterface } from '../../../navigators/NavigationContainer';
import DropDownPicker from '../../../components/dropdown/DropDownPicker';
import PressableButton from '../../../components/button/PressableButton';
import Link from '../../../components/link/Link';

function SignUpScreen(props: navigationInterface) {
    const { navigation, translate, navigate_link } = props;


    const [nameInput, setNameInput] = useState('');
    const [countryInput, setCountryInput] = useState({ label: "Bangladesh", value: 'Bangladesh' });
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const {
        sign_in,
        password_error,
        sign_up,
        password,
        name,
        email: emailTr,
        email_error,
        phone_error,
        name_error,
        privacy_policy,
        already_have_account,
        terms,
        by_signing_up_i_agree_to_the_terms_and_privacy_policy,
        phone
    } = translate


    const signupHandle = async () => {
        const info = {
            phone: phoneInput,
            country: countryInput.value,
            name: nameInput,
            email: emailInput,
            password: passwordInput
        }
        // fetch(signin_api, {
        //     method: "POST",
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, password })
        // }).then(res => res.json()).then(data => {
        //     console.log(data)
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    return (
        <SafeAreaView>
            <View style={{ alignItems: 'center', marginTop: 16 }}>
                <Image
                    source={assets_images.signin_bg}
                    style={{ width: 200, height: 150, objectFit: 'contain' }}
                />
            </View>
            <View style={[{ gap: 16, flex: 1, justifyContent: 'center' }, global_styles.container]}>
                {/* Name */}
                <View>
                    <Input
                        asset={assets_images.person3d}
                        setValue={setNameInput}
                        value={nameInput}
                        placeholder={name}
                        toast={name_error}
                        pattern={/[a-zA-Z]/g}
                    />
                </View>
                {/* Country select */}
                <View>
                    <DropDownPicker
                        asset={assets_images.location3d}
                        items={[{ label: 'Bangladesh', value: 'Bangladesh' }]}
                        setValue={setCountryInput}
                        value={countryInput}
                    />
                </View>

                {/* Phone number */}
                <View>
                    <Input
                        asset={assets_images.phone3d}
                        setValue={setPhoneInput}
                        value={phoneInput}
                        placeholder={phone}
                        toast={phone_error}
                        pattern={/^[0-9|+]{11}$/}
                    />
                </View>
                {/* Email */}
                <View>
                    <Input
                        asset={assets_images.email3d}
                        setValue={setEmailInput}
                        value={emailInput}
                        placeholder={emailTr}
                        toast={email_error}
                        pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                    />
                </View>

                {/* Password ************ */}
                <View>
                    <Input
                        asset={assets_images.password3d}
                        setValue={setPasswordInput}
                        value={passwordInput}
                        placeholder={password}
                        toast={password_error}
                        pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
                    />
                </View>

                <View style={{ gap: 2 }}>
                    <Text style={{ color: colors.danger }}>
                        {by_signing_up_i_agree_to_the_terms_and_privacy_policy}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 6, alignItems: 'center' }}>
                        <Link href={navigate_link?.terms_condition}>
                            {terms}
                        </Link>
                        <Text>
                            ,
                        </Text>
                        <Link href={navigate_link?.privacy_policy}>
                            {privacy_policy}
                        </Link>

                    </View>
                </View>
                {/* ************************* */}
                <View>
                    <PressableButton
                        text={sign_up}
                        disabled={(!Boolean(nameInput) || !Boolean(countryInput?.value) || !Boolean(passwordInput) || !Boolean(emailInput) || !Boolean(phoneInput))}
                        textStyle={{ color: colors.primary_text }}
                        onPress={signupHandle}
                        containerStyles={{ borderWidth: 0, height: 48, backgroundColor: colors.primary }}
                    />
                </View>
                <View style={{ gap: 4 }}>
                    <View style={{
                        alignItems: 'center', flexDirection: 'row', gap: 8
                    }}>
                        <Text style={global_styles.text_base}>
                            {already_have_account}?
                        </Text>
                        <Link href={navigate_link?.sign_in}>
                            {sign_in}
                        </Link>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default SignUpScreen;