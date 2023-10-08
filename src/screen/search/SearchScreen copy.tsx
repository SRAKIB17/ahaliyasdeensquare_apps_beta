import React, { useState } from 'react';
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';
import { Height, Width } from '../../utils/dimensions';
import Input from '../../components/input/Input';
import { global_styles } from '../../styles/global';
import { translateInterface } from '../../translate/translate';

export default function SearchScreen({
    isVisible = false,
    setIsVisible,
    translate
}: {
    isVisible: boolean,
    setIsVisible: any,
    translate: translateInterface
}) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => setIsVisible(false)}
        >
            <View style={styles.modal}>
                <View style={[{ paddingBottom: 10, }]}>
                    <Text style={[global_styles.text_xl, global_styles.font_medium]}>
                        {"placeholder"}
                    </Text>
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <Input
                        style={{ height: 48 }}
                        setValue={setSearchValue}
                        value={searchValue}
                        autoFocus={true}
                        placeholder={"searchPlaceholder"}
                    />
                </View>
                <ScrollView>
                    {/* {searchItems?.map((option, index) => {
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
                        })} */}
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        height: Height(100),
        padding: 8,
        paddingVertical: 48,
        paddingTop: 20,
        backgroundColor: 'white',
    },
});
