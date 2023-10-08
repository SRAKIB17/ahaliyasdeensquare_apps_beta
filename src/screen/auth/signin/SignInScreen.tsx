import React, { useState, useContext } from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native';
import Input from '../../../components/input/Input';
import { global_styles } from '../../../styles/global';
import { assets_images } from '../../../assets/assets_images';
import TouchableOpacityButton from '../../../components/button/TouchableOpacityButton';
import colors from '../../../utils/colors';
import { Height } from '../../../utils/dimensions';
import { navigationInterface } from '../../../navigators/NavigationContainer';
import PressableButton from '../../../components/button/PressableButton';
import { signin_api } from '../../../config';
import Toast from '../../../components/toast/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Link from '../../../components/link/Link';
import { AuthenticationCheck } from '../../../context/Authentication/AuthenticationCheckProvider';

function SignInScreen(props: navigationInterface) {
    const { navigation, translate, navigate_link } = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { refetch } = useContext(AuthenticationCheck)

    const { sign_in, password_error, password: passwordTr, email: emailTr, email_error, new_here, sign_up, forget_my_password } = translate
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>()

    const signinHandle = async () => {
        setLoading(true)
        setError('')
        fetch(signin_api, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(data => {
            setLoading(false)
            if (data?.success) {
                AsyncStorage.setItem('ref_tkn', data?.token).then(r => {
                    setTimeout(async () => {
                        await refetch()
                    }, 200);
                    navigation.navigate({ link: navigate_link.profile })
                })
            }
            else {
                setError(data?.message)
                Toast({ text: data?.message })
            }

        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
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
                {
                    (Boolean(error)) &&
                    <View>
                        <Text style={{ color: colors.danger }}>
                            {error}
                        </Text>
                    </View>
                }
                <View>
                    <Input
                        asset={assets_images.email3d}
                        setValue={setEmail}
                        value={email}
                        placeholder={emailTr}
                        toast={email_error}
                        pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                    />
                </View>
                <View>
                    <Input
                        asset={assets_images.password3d}
                        setValue={setPassword}
                        value={password}
                        placeholder={passwordTr}
                        toast={password_error}
                        pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
                    />
                </View>
                <View>
                    {
                        loading ?
                            <PressableButton
                                image={assets_images.loading_gif}
                                imageStyle={{ height: 28, width: 28 }}
                                textStyle={{ color: colors.primary_text }}
                                onPress={() => Toast({ text: "Please wait" })}
                                containerStyles={{ borderWidth: 0, height: 48, backgroundColor: colors.primary }}
                            />
                            :
                            <PressableButton
                                disabled={(!Boolean(password) || !Boolean(email))}
                                text={sign_in}
                                textStyle={{ color: colors.primary_text }}
                                onPress={signinHandle}
                                containerStyles={{ borderWidth: 0, height: 48, backgroundColor: colors.primary }}
                            />

                    }
                </View>
                <View style={{ gap: 4 }}>
                    <View style={{
                        alignItems: 'center', flexDirection: 'row', gap: 8
                    }}>
                        <Text style={global_styles.text_base}>
                            {new_here}?
                        </Text>

                        <Link href={navigate_link?.sign_up}>
                            {sign_up}
                        </Link>
                    </View>

                    <View style={{
                        alignItems: 'center', flexDirection: 'row', gap: 4
                    }}>
                        <Link href={navigate_link?.sign_up} >
                            {forget_my_password}
                        </Link>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default SignInScreen;