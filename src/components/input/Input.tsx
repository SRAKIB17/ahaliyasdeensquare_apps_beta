import React from 'react';
import colors from '../../utils/colors';
import { StyleSheet, TextInput } from 'react-native';


export default function Input({
    defaultValue = '',
    onChangeText,
    placeholder = 'Write something..'
}
    :
    {
        onChangeText: ((text: string) => void) | undefined,
        defaultValue?: string,
        placeholder?: string
    }) {
    return (
        <TextInput
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
        />
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