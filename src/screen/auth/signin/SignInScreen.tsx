import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Input from '../../../components/input/Input';
import Textarea from '../../../components/input/Textarea';

function SignInScreen() {
    return (
        <SafeAreaView>
            <View>
                <Input onChangeText={() => { }} />
            </View>
            <View>
                <Textarea onChangeText={() => { }} />
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;