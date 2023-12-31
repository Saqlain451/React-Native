
import { StyleSheet, View } from 'react-native';
import NetFlix from "./Src/Screens/NetFlix";
import Slider from "./Src/Screens/Slider";

export default function App() {
  return (
    <View style={styles.container}>
      <NetFlix/>
      <Slider/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
