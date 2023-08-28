// App.js
import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import BottomNavigation from "./Src/BottomNavigation";
import DrawerNavigation from "./Src/DrawerNavigation";


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

