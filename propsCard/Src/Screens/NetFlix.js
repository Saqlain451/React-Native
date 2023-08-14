import React from 'react';
import Card from "../Components/Card";
import planetPoster from '../../assets/dance.png'
import {View} from "react-native";
import abtalksPoster from '../../assets/abtalks.jpeg'
const styles = {
    flex : {
        display : "flex",
        alignItems : "center",
        flexDirection : "row",
        gap : 10,
    }
}
const NetFlix = () => {
    return (
        <View style={styles.flex}>
            <Card cardTitle={"The last Dance"} btnName={"Click here"} cardImg={planetPoster}/>
            <Card cardTitle={"ABtalks"} btnName={"Click here"} cardImg={abtalksPoster}/>
        </View>
    );
};

export default NetFlix;