// App.js
import React from 'react';
import DrawerNavigation from "./Src/DrawerNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";


const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <DrawerNavigation/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;

