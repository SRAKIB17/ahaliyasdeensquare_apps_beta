import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { global_styles } from '../../styles/global';
import colors from '../../utils/colors';

interface ButtonProps {
    text?: string,
    onPress: () => void;
    containerStyles?: any | object;
    disabled?: boolean,
    image?: any,
    image_url?: any,
    imageStyle?: object,
    textStyle?: object
}

export default function PressableButton({
    text, onPress, containerStyles, disabled = false, image = 0, image_url = '', imageStyle
    , textStyle
}: ButtonProps) {

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
        >
            <View style={[
                styles.root, containerStyles,
                {
                    backgroundColor: (
                        disabled ?
                            colors.grey
                            :
                            (containerStyles?.backgroundColor
                                ?
                                containerStyles?.backgroundColor
                                : styles.root.backgroundColor
                            )
                    )
                }
            ]}>
                <View>
                    {
                        Boolean(image) &&
                        <Image
                            source={image}
                            style={[{ width: 20, height: 20, objectFit: 'contain' }, imageStyle]}
                        />
                    }
                    {
                        Boolean(image_url) &&
                        <Image
                            source={{ uri: image_url }}
                            style={[{ width: 20, height: 20, objectFit: 'contain' }, imageStyle]}
                        />
                    }
                </View>
                <View>
                    {
                        Boolean(text) &&
                        <Text style={[global_styles.text_lg, textStyle]}>
                            {
                                text
                            }
                        </Text>
                    }
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.secondary,
        height: 35,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.border_color,
    },
})
