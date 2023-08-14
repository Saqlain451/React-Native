import {FlatList, StyleSheet, View} from "react-native";
import netflixData from "../Data/Data";
import Card from "../Components/Card";

const styles = StyleSheet.create({
    flatStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

const Slider = () => {
    return (
        <View style={styles.flatStyle}>
            <FlatList data={netflixData}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(key) => key.id}
                      renderItem={(ele) => {
                          const {btnName, name, posterImg} = ele.item
                          return (
                              <Card cardImg={posterImg} btnName={btnName} cardTitle={name}/>
                          )
                      }}
            />
        </View>
    );
};

export default Slider;