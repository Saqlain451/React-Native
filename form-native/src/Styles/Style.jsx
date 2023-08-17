import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    formWrapeer: {
        backgroundColor: "#eaeaea",
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 5,
        shadowColor: '#bebebe',
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 10,
    },
    loginText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1C9C7D",
        textAlign: "center"
    },
    labelText: {
        fontSize: 15,
        marginTop: 20,
    },
    inputText: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#1C9C7D",
        borderRadius: 5,
        height: 45,
        paddingHorizontal: 10,
        marginTop: 5,
    },

    buttonStyle: {
        backgroundColor: "#1C9C7D",
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "46%",
        borderRadius: 5
    },
    btn2Style: {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: "#1C9C7D",
    },

    forgotBtnStyle: {
        backgroundColor: "#1C9C7D",
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginBottom: 10,
    },

    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginVertical: 20,
        flexDirection: "row",
    },
})

export {styles};