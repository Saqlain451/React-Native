
import { StyleSheet, View } from 'react-native';
import Buttons from "./src/Button";
import TouchControlButton from "./src/TouchControlButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Buttons/>
      <TouchControlButton/>
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
