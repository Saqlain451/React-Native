import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import About from "../Screens/About";

const Stack = createNativeStackNavigator();
const Stacknavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"About"} component={About}/>
        </Stack.Navigator>
    );
};

export default Stacknavigator;
