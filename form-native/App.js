import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from "./src/Screen/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
      alignItems :"center",
      backgroundColor : '#eaeaea'
  },
});
