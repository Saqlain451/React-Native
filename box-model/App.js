import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.parentBox}>
            <View style={[styles.childBox, styles.childbox1]}>
                <Text>First Box</Text>
            </View>
            <View style={[styles.childBox, styles.childbox2]}>
                <Text>Second Box</Text>
            </View>
            <View style={[styles.childBox, styles.childbox3]}>
                <Text>Third Box</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    parentBox: {
        borderStyle:"dashed",
        borderWidth : 2,
        borderColor : "blue",
        padding : 10,
        marginHorizontal : 15,
        marginTop : 20,
        borderRadius : 6,
    },
    childBox: {
        paddingVertical : 50,
        display : "flex",
        alignItems : "center",
        justifyContent :"center",
        flexDirection : "row",
        borderRadius:5,
        shadowOffset: {width : 0, height : 2},
        shadowColor : "rgba(168,15,15,0.2)",
        shadowRadius : 5,
        elevation : 4,
    },
    childbox1:{
        backgroundColor : "green"
    },
    childbox2:{
        backgroundColor : "orange",
        marginTop : 10,
    },
    childbox3:{
        backgroundColor:"yellow",
        marginTop : 10
    }

});
