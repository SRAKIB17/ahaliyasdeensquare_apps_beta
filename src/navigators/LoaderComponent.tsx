import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Animated, Easing } from 'react-native';
import colors from '../utils/colors';
import { Height } from '../utils/dimensions';

const LoaderComponent = () => {
    const [spinValue] = useState(new Animated.Value(0));

    useEffect(() => {
        animateSpinner();
    }, []);

    const animateSpinner = () => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    };

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={{ height: Height(80), justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </Animated.View>
        </View>
    );
};

export default LoaderComponent;
