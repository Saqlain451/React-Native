import React from 'react';
import {Image, Text, TouchableHighlight, StyleSheet} from "react-native";
const styles = StyleSheet.create({
    touchButton : {
        width : "100%",
        height : "auto",
        paddingVertical : 10,
        marginTop : 20,
        backgroundColor : "blue",
    }
})
const TouchControlButton = () => {
    return (
        <>
            <TouchableHighlight style={styles.touchButton} onPress={()=>{
                console.log("Touch button clicked")}}>
                <Text>Touchable Button</Text>
            </TouchableHighlight>
        </>
    );
};

export default TouchControlButton;