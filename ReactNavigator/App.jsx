import React from 'react';
import {Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigation from "./Navigation/StackNavigation";

const App = () => {
    return (
       <NavigationContainer>
            <StackNavigation/>
       </NavigationContainer>
    );
};

export default App;
