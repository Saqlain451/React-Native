import { View,StyleSheet} from 'react-native';
import RandomColor from "./RnadomColor";

export default function App() {
  return (
    <View style={styles.container}>
        <RandomColor/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});