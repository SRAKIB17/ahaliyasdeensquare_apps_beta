import React, { useState } from 'react';
import colors from '../../utils/colors';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Toast from '../toast/Toast';
import { assets_images } from '../../assets/assets_images';
import { global_styles } from '../../styles/global';


export default function Input({
    asset,
    defaultValue = '',
    value,
    setValue = () => { },
    placeholder = 'Write something..',
    pattern,
    style = {},
    toast = 'Please input valid info',
    multiline = false,
    autoFocus = false,
}
    :
    {
        autoFocus?: boolean,
        style?: object | any,
        asset?: number,
        value: string,
        multiline?: boolean,
        setValue: any,
        defaultValue?: string,
        placeholder?: string,
        pattern?: RegExp,
        toast?: string
    }) {

    const [error, setError] = useState('')
    const [inputValue, setInputValue] = useState('')

    const onChangeTextHandle = (text: string) => {
        setError('')
        if (pattern) {
            if (!pattern?.test(text?.trim()) && pattern) {
                setError(toast);
            }
            else {
                setError('');
            }
        }
        setValue(text?.trim())
        setInputValue(text?.trim())
    }

    const onBlurHandle = () => {
        if (!pattern?.test(inputValue) && pattern) {
            setValue('')
            Toast({ text: toast })
        }
        else {
            setValue(inputValue)
            setError('')
        }
    }
    return (
        <View>
            {
                Boolean(error) &&
                <View style={{ paddingVertical: 3 }}>
                    <Text style={[{ color: colors.danger }, global_styles.text_xs]}>
                        {error}
                    </Text>
                </View>
            }
            <View
                style={(asset ? [
                    styles.input,
                    {
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                    }
                ] : style)}
            >
                {
                    asset ?
                        <Image
                            source={asset}
                            style={{
                                width: 20,
                                height: 20,
                                objectFit: 'contain',
                                position: 'absolute',
                                left: 6,
                                marginLeft: 4
                            }}
                        />
                        :
                        <></>
                }
                <TextInput
                    autoFocus={autoFocus}
                    multiline={multiline}
                    onBlur={(text) => onBlurHandle()}
                    defaultValue={defaultValue}
                    placeholderTextColor={colors.grey}
                    onChangeText={onChangeTextHandle}
                    placeholder={placeholder}
                    style={([(asset ? { flex: 1, paddingLeft: 30, fontSize: 16 } : styles.input), style])}
                />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        padding: 8,
    },
});