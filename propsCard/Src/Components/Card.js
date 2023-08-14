import React from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({

    imgFluid: {
        width: "100%",
        height: "auto",
        aspectRatio: 140 / 209,
        objectFit: "cover",
        borderRadius : 3,
    },
    card:{
        width:"40%",
        backgroundColor : "aliceblue",
        padding : 3,
        borderRadius : 5,
    }
})
const Card = ({cardImg, cardTitle, btnName}) => {
    return (
        <>
            <View style={styles.card}>
                <Image source={cardImg} style={styles.imgFluid}/>
                <Text>{cardTitle} </Text>
                <Button title={btnName}/>
            </View>
        </>
    );
};

export default Card;