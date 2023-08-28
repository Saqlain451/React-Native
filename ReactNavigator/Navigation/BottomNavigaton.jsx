import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Article from "../Components/Article";
import Chat from "../Components/Chat";
import Contact from "../Components/Contact";
import Profile from "../Components/Profile";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tabs = createBottomTabNavigator();
const IconProvider = (name) => ({focused}) => (
    <MaterialIcons name={name} size={25} color={focused ? "green" : "gray"}/>
)
const BottomNavigaton = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name={"Article"} component={Article} options={{
                tabBarIcon: IconProvider("article")
            }}/>
            <Tabs.Screen name={"Chat"} component={Chat} options={{
                tabBarIcon: IconProvider("chat")
            }}/>
            <Tabs.Screen name={"Contact"} component={Contact} options={{
                tabBarIcon: IconProvider("perm-contact-cal")
            }}/>
            <Tabs.Screen name={"Profile"} component={Profile} options={{
                tabBarIcon: IconProvider("person")
            }}/>
        </Tabs.Navigator>
    );
};

export default BottomNavigaton;
