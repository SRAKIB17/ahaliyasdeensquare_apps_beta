import React, { useContext } from 'react';
import { Pressable, Text } from 'react-native';
import { NavigationProvider } from '../../navigators/NavigationContainer';
import colors from '../../utils/colors';
import { global_styles } from '../../styles/global';

export default function Link({
    href,
    children,
    style = {}
}: {
    href: string,
    children: React.ReactNode
    style?: object | any
}) {
    const { navigation } = useContext(NavigationProvider)
    return (
        <Pressable onPress={() => navigation.navigate({ link: href })}>
            <Text style={[{ color: colors.blue }, global_styles.text_base, style]}>
                {children}
            </Text>
        </Pressable>
    );
}