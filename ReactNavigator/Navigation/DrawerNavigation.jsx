import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "../Components/Home";
import About from "../Components/About";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Drwer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drwer.Navigator>
            <Drwer.Screen name={"Home"} component={Home} options={{
                drawerIcon: () => (<MaterialIcons name={"Home"} color={"black"} size={25}/>)
            }}/>
            <Drwer.Screen name={"About"} component={About}/>
        </Drwer.Navigator>
    );
};

export default DrawerNavigation;
