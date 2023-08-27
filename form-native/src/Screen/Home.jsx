import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import {Storage} from "expo-storage";
import {styles} from "../Styles/Style";

const Home = ({navigation}) => {
    const [userName, setuserName] = useState("")


    useEffect(() => {
        const userFInd = async () => {
            const userDetails = JSON.parse(await Storage.getItem({key: "user"})) || undefined;
            if (!userDetails) {
                navigation.navigate("login")
            } else {
                setuserName(userDetails.name)
                console.log(userDetails.name)
            }
        }
        userFInd();
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text>
                This is your home page {userName}
            </Text>
        </View>
    );
};

export default Home;