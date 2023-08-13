import React from "react";
import {Image, StyleSheet, Text, View} from 'react-native';
import Lists from "./Src/Screens/Lists";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> My Friend List</Text>
      <Lists/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle :{
    color : "green",
    fontSize : 25,
    marginTop : 100,
    fontWeight : "bold"
  },

});
