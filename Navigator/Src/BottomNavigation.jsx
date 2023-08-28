import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Aritcle from "../Screens/Aritcle";
import Contact from "../Screens/Contact";
import Chat from "../Screens/Chat";
import {MaterialIcons} from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();
const BottomNavigation = () => {
    const getTabBarIcon = (iconName, color) => ({focused}) => (
        <MaterialIcons name={iconName} size={24} color={focused ? color : 'gray'}/>
    );

    return (
        <Tabs.Navigator
            initialRouteName={"Article"}>
            <Tabs.Screen
                name={"Article"}
                component={Aritcle}
                options={{
                    tabBarIcon: getTabBarIcon('article', 'green'),
                    headerShown : false
                }}
            />
            <Tabs.Screen
                name={"Contact"}
                component={Contact}
                options={{
                    tabBarIcon: getTabBarIcon('perm-contact-cal', 'green'),
                    headerShown : false,
                }}
            />
            <Tabs.Screen
                name={"chat"}
                component={Chat}
                options={{
                    tabBarIcon: getTabBarIcon('chat', 'green'),
                    headerShown : false
                }}
            />
        </Tabs.Navigator>
    );
};

export default BottomNavigation;
