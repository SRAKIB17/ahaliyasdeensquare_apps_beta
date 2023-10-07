import React from 'react';
import PressableButton from '../components/button/PressableButton';
import { BackHandler, Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';
import { Height, Width } from '../utils/dimensions';
import { translateInterface } from '../translate/translate';
import { global_styles } from '../styles/global';

function ExitButton({
    translate,
    setExitApp
}: {
    translate: translateInterface,
    setExitApp: React.Dispatch<React.SetStateAction<Boolean>>
}) {
    const { do_you_want_to_exit, cancel, exit } = translate
    return (
        <View
            style={{
                position: 'absolute',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}
        >
            <View
                style={{
                    height: Height(30),
                    padding: 16,
                    width: Width(100),
                }}
            >
                <View style={{
                    justifyContent: 'center',
                    padding: 20,
                    borderRadius: 4,
                    height: 230,
                    gap: 20,
                    backgroundColor: colors.primary,
                }}>

                    <View>
                        <Text style={[global_styles.text_4xl, { color: colors.primary_text }]}>
                            {
                                do_you_want_to_exit
                            }?😭
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <View>
                            <PressableButton
                                onPress={() => {
                                    BackHandler.exitApp()
                                    setExitApp(false)
                                }}
                                text={exit}
                                containerStyles={{ ...styles.button, ...styles.exit_button }}
                                textStyle={{
                                    color: colors.danger_text,
                                    fontSize: 20,
                                    fontWeight: "600"
                                }}
                            />
                        </View>
                        <View>
                            <PressableButton
                                onPress={() => setExitApp(false)}
                                text={cancel}
                                containerStyles={{ ...styles.button, ...styles.cancel_button }}
                                textStyle={{
                                    color: colors.info_text,
                                    fontSize: 20,
                                    fontWeight: "600"
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 48,
        paddingHorizontal: 20,
    },
    exit_button: {
        backgroundColor: colors.danger,
    },
    cancel_button: {
        backgroundColor: colors.info,
    }

})
export default ExitButton;