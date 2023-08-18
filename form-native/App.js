import {StyleSheet} from 'react-native';
import Form from "./src/Screen/Form";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/Screen/Home";

export default function App() {
    const Stack = createNativeStackNavigator();
    const {Navigator,Screen} = Stack
    return (

        <NavigationContainer>
            <Navigator initialRouteName={"home"}>
                <Screen name={"login"} component={Form}/>
                <Screen name={"home"} component={Home}/>
            </Navigator>
        </NavigationContainer>

    );
}

