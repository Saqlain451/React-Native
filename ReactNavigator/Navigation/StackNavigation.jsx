import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../Components/Home";
import About from "../Components/About";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"About"} component={About}/>
        </Stack.Navigator>
    );
};

export default StackNavigation;
