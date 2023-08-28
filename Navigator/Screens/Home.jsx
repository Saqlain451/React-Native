import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Home Component
            </Text>
            <Button title={"Let's go"} onPress={()=>{
                navigation.navigate("About")
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
});

export default Home;
