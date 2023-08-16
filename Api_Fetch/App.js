import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Projects from "./src/Screens/Projects";

export default function App() {
    return (
        <View style={styles.container}>
            <Projects/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor : "#1b1b1b"
    },
});
