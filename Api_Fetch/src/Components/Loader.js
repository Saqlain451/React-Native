import React from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

const Loader = () => {
    let spinValue = new Animated.Value(0);

    // Configure the animation
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: false,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (

        <Animated.View style={[styles.loader, {transform: [{rotate: spin}]}]}></Animated.View>

    )
};

const styles = StyleSheet.create({
    loader: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderTopColor : "green",
        borderWidth : 5,
        borderStyle : "solid",
    },
});

export default Loader;
