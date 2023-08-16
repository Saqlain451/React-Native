import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Card = ({imageSrc, name, stack, githubUrl, demoUrl}) => {
    return (
        <>
            <View style={styles.cardStyle}>
                <View style={styles.center}>
                    <Image source={{uri: imageSrc}} style={styles.imgFluid}/>
                </View>
                <View style={[styles.center, {justifyContent: "space-around"}]}>
                    <View>
                        <Text style={styles.projectName}>{name}</Text>
                        <Text style={styles.stackStyle}>{stack}</Text>
                    </View>
                    <View style={[styles.center, {gap: 15}]}>
                        <TouchableOpacity onPress={() => Linking.openURL(githubUrl)} style={[styles.buttonStyle]}><Icon
                            name={"github"} size={23}
                            color={"#09e85e"}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(demoUrl)} style={styles.buttonStyle}><AntIcon
                            name={"select1"} size={20}
                            color={"#09e85e"}/></TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )

};

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: 'rgba(255,255,255,0.02)',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "rgba(255,255,255,0.15)",
        borderStyle: "solid",
        borderWidth: 2,
        overflow: "hidden",
    },
    center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 25,
    },
    imgFluid: {
        width: "60%",
        height: "auto",
        aspectRatio: 1,
        objectFit: "cover",
        borderRadius: 100,
    },
    projectName: {
        fontSize: 19,
        color: "#a5a5a5",
        fontWeight: "bold",
        letterSpacing: 0.5
    },
    stackStyle: {
        fontSize: 15,
        color: "#09e85e",
        marginTop: 10,
    },

    buttonStyle: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(255,255,255,0.02)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

})

export default Card;