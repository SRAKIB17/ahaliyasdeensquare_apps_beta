import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Width } from '../utils/dimensions';
import colors from '../utils/colors';

const LoaderHeader = () => {
    const [slideAnimation] = useState(new Animated.Value(-100));

    useEffect(() => {
        startSlideAnimation();
    }, []);

    const startSlideAnimation = () => {
        slideAnimation.setValue(-100);
        Animated.timing(slideAnimation, {
            toValue: Width(100) + 50,  // Adjust this value to control the slide distance
            duration: 1400,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => startSlideAnimation());
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.loading, { transform: [{ translateX: slideAnimation }] }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 4,
        backgroundColor: colors.info,
        borderRadius: 4,
        overflow: 'hidden',
    },
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: 'hsla(0, 0%, 90%, 0.891)',
        borderRadius: 1,
    },
});

export default LoaderHeader;
